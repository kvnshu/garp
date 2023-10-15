'use client'
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Checkbox } from "@nextui-org/checkbox";
import { Divider } from "@nextui-org/divider";
import moment from 'moment';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function ReadingItemList({ paper }) {
  async function handleClick(event) {
    const supabase = createClientComponentClient()
    const { error } = await supabase
      .from('save')
      .update({ read: true })
      .eq('id', paper.id)
    if (error) {
      throw error;
    }
  }

  return (
    <div onClick={handleClick}>
      <Card className="max-w-[400px] mb-4">
        <CardBody className="flex flex-row">
          <Checkbox
            defaultChecked="false"
            onClick={handleClick}
          >
          </Checkbox>
          <Divider orientation="vertical" />
          <div className="flex flex-col">
            <Link
              isExternal
              href={paper.paper.url}
            >
              <p>{paper.paper.url}</p>
            </Link>
            <p className="text-md">{moment(paper.paper.created_at).fromNow()}</p>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}