import React, { useState, useEffect } from "react";
import FeedItem from "./FeedItem";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// get all papers that were saved by people the user is following
const Feed = ({ paperItems, setPaperItems }) => {
	const [feedItems, setFeedItems] = useState([]);
	const supabase = createClientComponentClient();

	useEffect(() => {
		const getData = async () => {
			const {data: { user }} = await supabase.auth.getUser();
			
			const { data: following } = await supabase
				.from("following")
				.select("user_id2")
				.eq("user_id1", user.id);

			const followingIds = await following.map((item) => item.user_id2);

			// join to get paper and user info
			let { data } = await supabase
				.from("save")
				.select(
					`
					paper_id,
					user_id,
					created_at,
					paper(id, url),
					user(id, email)
				`
				)
				.in("user_id", followingIds)
        .order('created_at', { ascending: false });

			setFeedItems(data);
		};
		getData()
	}, [supabase]);

	return (
		<div>
			{feedItems ? (
				feedItems.map((article) => (
					<FeedItem
						paperItems={paperItems}
						setPaperItems={setPaperItems}
						data={article}
					/>
				))
			) : (
				<div>Loading feed...</div>
			)}
		</div>
	);
};

export default Feed;
