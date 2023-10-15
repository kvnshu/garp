import React from "react";
import ReadingItemList from "./ReadingListItem";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const ReadingList = async () => {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data: session } = await supabase.auth.getUser();
  const { data: papers } = await supabase.from('save').select(`
    user_id,
    read,
    paper (
      url,
      created_at
    )
  `)
  .eq('read', false)
  .eq('user_id', session.user.id)

  // console.log(papers)

  return (
    <div>
      {papers ? (
        papers.map((paper) => <ReadingItemList paper={paper} key={paper.id} />)
      ) : (
        null
      )
      }
    </div>
  );
};

export default ReadingList;
