import React from "react";
import ReadingItemList from "./ReadingListItem";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { spawn } from "child_process";

const ReadingList = async () => {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data: session } = await supabase.auth.getUser();
  const { data: papers } = await supabase.from('save').select(`
    user_id,
    paper (
      url,
      created_at
    )
  `).eq('user_id', session.user.id)

  return (
    <div>
      {papers ? (
        papers.map((paper) => <ReadingItemList key={paper.id} paper={paper} />)
      ) : (
        null
      )
      }
    </div>
  );
};

export default ReadingList;
