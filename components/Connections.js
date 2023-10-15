import { createClient } from '@supabase/supabase-js'
import React from "react";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Card, CardBody } from '@nextui-org/card';

export default async function Connections() {
    const supabase = createServerComponentClient({ cookies })

	const {
		data: { user },
	} = await supabase.auth.getUser()

    const email = user.email

    const {data, error} = await supabase
        .from('following')
        .select('user!following_user_id2_fkey(id, email)')
        .eq('user_id1', user.id)
    console.log(data)
    
    return (
        <div>
            <ul>
                {data.map(person => <p>{person.user.email}</p>)}
            </ul>
        </div>
    )
}