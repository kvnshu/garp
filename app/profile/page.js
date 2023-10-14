"use client"

import React from "react";
import Layout from "../../components/Layout";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";

// function that gets userID from email
// async function getUserID(email) {
// 	const user = await prisma.user.findUnique({
// 		where: { email: email },
// 	});

// 	return user.id;
// }

// //fetching data from database
// export async function getServerSideProps(context) {
// 	const session = await getServerSession(
// 		context.req,
// 		context.res,
// 		authOptions
// 	);

// 	const email = await session.user.email;
// 	const userID = await getUserID(email);

// 	console.log("userID", userID);

// 	// get articles that the user read
// 	const paperIDs = await prisma.saved.findMany({
// 		where: { userId: userID, read: true },
// 		select: {
// 			paperId: true,
// 		},
// 	});
// 	console.log("articlesRead: ", paperIDs);

// 	const papersRead = await prisma.paper.findMany({});

// 	return {
// 		props: {
// 			session,
// 			papersRead,
// 		},
// 	};
// }

function Profile({ session, articlesRead }) {
	// const { data: session } = useSession()
	//const imgurl = session.user.image;

	// HTML that you see on the page
	return (
		<Layout>
			<div className="grid grid-cols-4 mt-6 mb-6">
				<div className="w-32">
					<Avatar
						className="w-32 h-32"
						isBordered
						color="default"
						src={""}
						size="lg"
					/>
					<Button className="mt-4 justify-self-center">Follow</Button>
				</div>
				<div className="col-span-3">
					<h2 className="text-2xl font-semibold border-b mb-2">
						Name
					</h2>
					<p className="text-xl">username</p>

					<p className="text-2xl font-semibold mt-16 border-b mb-4">
						What I have read
					</p>
					<Card className="mb-4" shadow="sm">
                        <CardBody>
                            <p>Make beautiful websites regardless of your design experience.</p>
                            <p>Peter W</p>
                            <p>Link to paper</p>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <p>Make beautiful websites regardless of your design experience.</p>
                            <p>Peter W</p>
                            <p>Link to paper</p>
                        </CardBody>
                    </Card>

					<div className="mt-8">
						<p className="text-2xl font-semibold border-b ">
							What I have saved
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Profile;
