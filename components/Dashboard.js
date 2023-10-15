"use client";
import React, { useState, useEffect } from "react";
import ReadingList from "./ReadingList.jsx";
import Feed from "./Feed";
import SearchBar from "./SearchBar";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Dashboard = ({ toRead, feed }) => {
	const [paperItems, setPaperItems] = useState([]);
	const supabase = createClientComponentClient();

	useEffect(() => {
		const getData = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			const { data: papers } = await supabase
				.from("save")
				.select(`
					id,  
					user_id,
						read,
						paper (
						url,
						created_at
						)
				`)
				.eq("read", false)
				.eq("user_id", user.id);
			setPaperItems(papers);
		};
		getData();
	}, [supabase]);

	return (
		<div>
			<SearchBar paperItems={paperItems} setPaperItems={setPaperItems} />
			<div className="grid grid-cols-2 gap-4">
				<div>
					<h2 className="text-2xl font-semibold mb-4">To-Read</h2>
					<ReadingList
						paperItems={paperItems}
						setPaperItems={setPaperItems}
					/>
				</div>
				<div>
					<h2 className="text-2xl font-semibold mb-4">Feed</h2>
					<Feed
						paperItems={paperItems}
						setPaperItems={setPaperItems}
					/>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
