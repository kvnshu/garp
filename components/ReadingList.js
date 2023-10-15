import React from "react";
import ReadingItemList from "./ReadingListItem";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const ReadingList = async () => {

  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data: papers } = await supabase.from('paper').select('*')

  return (
    <div>
      {papers.map((paper) => <ReadingItemList paper={paper} />)}
    </div>
);
};

export default ReadingList;
