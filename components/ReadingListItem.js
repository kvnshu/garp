import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

export default function ReadingItemList({ paper }) {
  return (
    <Card className="max-w-[400px] mb-4">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Saved X days ago</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Paper Title</p>
        <p>{paper.url}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          href={paper.url}
        >
          Read Now
        </Link>
        <Button>Save this paper</Button>
      </CardFooter>
    </Card>
  )
}