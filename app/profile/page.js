import { createClient } from "@supabase/supabase-js";
import React from "react";
import Layout from "../../components/Layout";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Page() {
	const supabase = createServerComponentClient({ cookies })

	const {
		data: { user },
	} = await supabase.auth.getUser()
	const email = user.email
	const userID = user.id

	const savedID = await supabase.from("save").select("id").eq(userID)
	console.log(savedID)

	//const paperID = await supabase.from("paper").select("id").eq(savedID)


	  
	console.log(user)




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
				<Button className="mt-4 mx-6" >Follow</Button>
				
			</div>
			<div className="col-span-3">
				<h2 className="text-2xl font-semibold border-b mb-2">Email</h2>
					<p className="text-xl"> {email}
					</p>

				<p className="text-2xl font-semibold mt-16 border-b mb-4">
					What I Have Read
				</p>
				<Card className="mb-4" shadow="sm">
					<CardBody>
						<p>
							Make beautiful websites regardless of your design
							experience.
						</p>
						<p>Peter W</p>
						<p>Link to paper</p>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<p>
							Make beautiful websites regardless of your design
							experience.
						</p>
						<p>Peter W</p>
						<p>Link to paper</p>
					</CardBody>
				</Card>

				<div className="mt-8">
					<p className="text-2xl font-semibold border-b ">
						What I Have Saved
					</p>
				</div>
			</div>
		</div>
		 </Layout>
	);
}
