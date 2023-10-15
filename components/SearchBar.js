'use client'
import React, { useState } from "react"
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const savePaper = () => {
    // console.log("value", searchText)
    setSearchText("")
  }

  return (
    <div className='mb-8'>
      <h2 className='text-2xl font-semibold mb-4'>Save a new paper</h2>
      <div>
        <Input
          type="text"
          label="URL to paper"
          placeholder="Enter the url to the paper"
          value={searchText}
          onValueChange={savePaper}
        />
        <Button color="primary" className='mt-4' onPress={savePaper}>
          Enter
        </Button>
      </div>
    </div>
  )
}