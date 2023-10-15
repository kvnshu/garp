"use server";
import React from "react";
import FeedItem from "./FeedItem";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";

const savePaper = async () => {
  'use server';
  const supabase = createServerActionClient({ cookies });
  const { error } = await supabase.from('save').insert({ paper_id: data.paper_id, user_id: user.id });
  console.log("error: ", error);
  return error;
} 

// get all papers that were saved by people the user is following
const Feed = async () => {
	const supabase = createServerComponentClient({ cookies });

	const {
		data: { user },
	} = await supabase.auth.getUser();



	// get all users the current user is following
	const { data: following } = await supabase.from("following").select("user_id2").eq("user_id1", user.id);
  const followingIds = await following.map((item) => item.user_id2);
  
  // console.log("following", followingIds)

  // join to get paper and user info
  let { data } = await supabase.from("save").select(`
    paper_id,
    user_id,
    created_at,
    paper(id, url),
    user(id, email)
  `).in("user_id", followingIds);

	// console.log("feed", data );

	return (
		<div>
			{data.map((article) => (
				<FeedItem data={article}  />
			))}
		</div>
	);
};

export default Feed;
