'use server'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";

export async function savePaper({data}) {
    const supabase = createServerActionClient({ cookies });
    const {
        data: { user },
    } = await supabase.auth.getUser();

    console.log("data: ", data);

    // TODO: Create a paper entry too
    const { error } = await supabase.from('save').insert({ paper_id: data, user_id: user.id });
    console.log("error: ", error);
    return error;
}