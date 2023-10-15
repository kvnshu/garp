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

	const { data, error } = await supabase
  		.from('save')
  		.select('*, paper(url)')
  		.eq('user_id', user.id)
		.eq('read', true)

	const first5 = data.slice(0,5)
	console.log(first5)


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

				<ul>{first5.map(person => <Card className="mb-4" shadow="sm">
					<CardBody>
						<p>
							{person.paper_id}
						</p>
						<p>Author Name</p>
						<p>{person.paper.url}</p>
					</CardBody>
				</Card>)}</ul>

			</div>
		</div>
		 </Layout>
	);
}
