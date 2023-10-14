"use client"
import React from 'react';
import LoginButton from './LoginButton';

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center content-center text-center pt-36">
      <div >
        <p className='text-3xl mb-4'>Community platform for research papers</p>
        <p className='text-1xl'>Keep track of papers you want to read, and discover what your peers are reading.</p>
      </div>
      <div className="mt-8">
        <LoginButton/>
      </div>
    </div>

  )
}

export default LandingPage;