import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import moment from "moment";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function FeedItem({ data, paperItems, setPaperItems }) {
	// async function savePaper(event) {
	// 	// const url = searchText;
	// 	const supabase = createClientComponentClient();
	// 	const {
	// 		data: { user },
	// 	} = await supabase.auth.getUser();

	// 	// updating save
	// 	const { data: save, err2 } = await supabase
	// 		.from("save")
	// 		.insert({ paper_id: data.paper.id, user_id: user.id })
	// 		.select();
	// 	if (err2) {
	// 		throw error;
	// 	}

	// 	const newItem = {
	// 		id: save.id,
	// 		user_id: save.user_id,
	// 		read: false,
	// 		paper: {
	// 			url: data.url,
	// 			created_at: data.created_at,
	// 		},
	// 	};
	// 	setPaperItems([...paperItems, newItem]);
	// }

	return (
		<div>
			<Card className="max-w-[400px] break-all mb-4">
				<CardBody>
					<p className="text-md">
						{data.user.email} saved this paper
					</p>
					<Link isExternal href={data.paper.url}>
						<p>{data.paper.url}</p>
					</Link>
					<p className="mt-2">
						{moment(data.paper.created_at).fromNow()}
					</p>
					{/* { data ? (
						<Button onClick={savePaper}>Save this paper</Button>
					) : null} */}
				</CardBody>
			</Card>
		</div>
		// <Card className="max-w-[400px] mb-4">
		// 	<CardHeader className="flex gap-3">
		// 		<div className="flex flex-col">
		// 			<p className="text-md">{data.user.email} saved this paper Y ago</p>
		// 		</div>
		// 	</CardHeader>
		// 	<Divider />
		// 	<CardBody>
		// 		<p>{data.paper_id}</p>
		// 		<p>Link: {data.paper.url}</p>
		// 	</CardBody>
		// 	<Divider />
		// 	<CardFooter>
		//         <button onClick={savePaper}>hello</button>
		// 		<Button>Save this paper</Button>
		// 	</CardFooter>
		// </Card>
	);
}
