"use client";

import React from "react";
import Layout from "../../components/Layout";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";

export default function Profile({ articles }) {
	console.log("articles ", articles);
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
							<p>
								Make beautiful websites regardless of your
								design experience.
							</p>
							<p>Peter W</p>
							<p>Link to paper</p>
						</CardBody>
					</Card>
					<Card>
						<CardBody>
							<p>
								Make beautiful websites regardless of your
								design experience.
							</p>
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
