"use client";
import React, { useEffect, useState } from "react";
import ReadingItemList from "./ReadingListItem";

const ReadingList = ({ paperItems, setPaperItems }) => {
	return (
		<div>
			{paperItems
				? paperItems.map((paper) => (
						<ReadingItemList
							paper={paper}
							paperItems={paperItems}
							setPaperItems={setPaperItems}
							key={paper.id}
						/>
				  ))
				: null}
		</div>
	);
};

export default ReadingList;
