"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function SearchBar({ paperItems, setPaperItems }) {
	const [searchText, setSearchText] = useState("");
	const router = useRouter();

	async function savePaper(event) {
		const url = searchText;
		const supabase = createClientComponentClient();
		const {
			data: { user },
		} = await supabase.auth.getUser();

		// updating paper
		const { data, error: err1 } = await supabase
			.from("paper")
			.upsert({ url: url })
			.select();
		if (err1) {
			throw error;
		}
		const inserted = await data[0];

		// updating save
		const { data: save, err2 } = await supabase
			.from("save")
			.insert({ paper_id: inserted.id, user_id: user.id })
			.select();
		if (err2) {
			throw error;
		}
		setSearchText("");

		const newItem = {
			id: save.id,
			user_id: save.user_id,
			read: false,
			paper: {
				url: inserted.url,
				created_at: inserted.created_at,
			},
		};
		setPaperItems([...paperItems, newItem]);
	}

	return (
		<div className="mb-8">
			<h2 className="text-2xl font-semibold mb-4">Save a new paper</h2>
			<div>
				<Input
					type="text"
					label="URL to paper"
					placeholder="Enter the url to the paper"
					value={searchText}
					onValueChange={setSearchText}
				/>
				<Button color="primary" className="mt-4" onPress={savePaper}>
					Enter
				</Button>
			</div>
		</div>
	);
}
