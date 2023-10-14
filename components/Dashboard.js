"use client"
import React from 'react';

import ReadingList from './ReadingList';
import Feed from './Feed';
import {Input, Button} from "@nextui-org/react";

const Dashboard = ({toRead, feed}) => {
  console.log("to Read", toRead)
  const [value, setValue] = React.useState("");

  const savePaper = () =>{
    console.log("value", value)
    setValue("")
  }

  return (
    <div>
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Save a new paper</h2>
        <div>
        <Input 
          type="text" 
          label="URL to paper"
          placeholder="Enter the url to the paper" 
          value={value}
          onValueChange={setValue}
        />
        <Button color="primary" className='mt-4' onPress={savePaper}>
          Enter
        </Button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <h2 className='text-2xl font-semibold'>To-Read</h2>
          <ReadingList />
        </div>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>Feed</h2>
          <Feed />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;