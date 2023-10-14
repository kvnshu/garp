import { createClient } from "@supabase/supabase-js";
import Profile from "./profile"

export default async function Page() {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
	);

	const { data } = await supabase.from("user").select("email");
	return <Profile articles={data}></Profile>;
}
