'use client'
import React, { useState } from "react"
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { savePaper } from "./savePaper";

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className='mb-8'>
      <h2 className='text-2xl font-semibold mb-4'>Save a new paper</h2>
      <div>
        <Input
          type="text"
          label="URL to paper"
          placeholder="Enter the url to the paper"
          value={searchText}
          onValueChange={setSearchText}
        />
        <Button color="primary" className='mt-4' onPress={async () => savePaper(searchText)}>
          Enter
        </Button>
      </div>
    </div>
  )
}