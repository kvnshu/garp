'use client'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import {Button} from "@nextui-org/button"

// import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from "next/headers";


export default async function FeedItem({data, savePaper}) {
    // const supabase = createServerActionClient({ cookies });
    // const {
	// 	data: { user },
	// } = await supabase.auth.getUser();

    // const savePaper = async () => {
    //     'use server'
    //     const { error } = await supabase.from('save').insert({ paper_id: data.paper_id, user_id: user.id });
    //     console.log("error: ", error);
    //     return error;
    // } 

	return (
		<Card className="max-w-[400px] mb-4">
			<CardHeader className="flex gap-3">
				<div className="flex flex-col">
					<p className="text-md">{data.user.email} saved this paper Y ago</p>
				</div>
			</CardHeader>
			<Divider />
			<CardBody>
				<p>{data.paper_id}</p>
				<p>Link: {data.paper.url}</p>
			</CardBody>
			<Divider />
			<CardFooter>
                <button onClick={savePaper}>hello</button>
				<Button>Save this paper</Button>
			</CardFooter>
		</Card>
	);
}
