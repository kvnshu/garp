import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";


const articles = [
	{
		id: 1,
		url: "test1.com",
	},
	{
		id: 2,
		url: "test2.com",
	},
	{
		id: 3,
		url: "test3.com",
	},
];

const ReadingList = () => {
	return (
		<div>
      {articles.map((article) => 
        <Card className="max-w-[400px] mb-4">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Saved X days ago</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p>Paper Title</p>
            <p>{article.url}</p>
          </CardBody>
          <Divider/>
          <CardFooter>
            <Link
              isExternal
              href="https://github.com/nextui-org/nextui"
            >
              Read Now
            </Link>
            <Button>Save this paper</Button>
          </CardFooter>
      </Card>
      )}
    </div>
	);
};

// export const getServerSideProps = async ({ req }) => {
//   const list = prisma.paper.findMany(
//     {
//       where: {
//         url: {
//           contains: 'https://arxiv.org/abs/1706.03762'
//         }
//       }
//     }
//   )
//   console.log(list);
//   return list;
// }

export default ReadingList;
