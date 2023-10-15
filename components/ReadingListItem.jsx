'use client'
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";

import moment from 'moment';

export default function ReadingItemList({ paper }) {
  function handleClick() {
    console.log('click.')
  }

  return (
    <div onClick={handleClick}>
      <Card className="max-w-[400px] mb-4">
        <CardBody>
          <Link
            isExternal
            href={paper.paper.url}
          >
            <p>{paper.paper.url}</p>
          </Link>
          <p className="text-md">{moment(paper.paper.created_at).fromNow()}</p>
        </CardBody>
      </Card>
    </div>
  )
}