import React from 'react';
import ReadingList from './ReadingList.jsx';
import Feed from './Feed';
import SearchBar from './SearchBar';

const Dashboard = ({toRead, feed}) => {
  // console.log("to Read", toRead)

  return (
    <div>
      <SearchBar/>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>To-Read</h2>
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