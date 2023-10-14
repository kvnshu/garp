"use client"

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton'
import { Avatar } from "@nextui-org/react";

const Header = async () => {
  //const supabase = createServerComponentClient({ cookies })

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser()

  let user = true
  
  let left = (
    <NavbarBrand>
      <a href="/" className="text-3xl font-bold ">
        garp
      </a>
    </NavbarBrand >
  );

  let right = null;

  if (user) {
    left = (
      <div className="left">
        <a href="/" className="text-3xl font-bold ">
          garp
        </a>
      </div>
    );
    right = (
      <div className="right">
        <Popover placement="bottom" showArrow={true}>
          <PopoverTrigger>
            <Button color="foreground"><Avatar src="" /></Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className='mb-4'>
                <a href="/profile">
                  <Button>Profile</Button>
                </a>
              </div>
              <div><LogoutButton/></div>
            </div>
          </PopoverContent>
        </Popover>

      </div>
    );
  } else{
    right = (<LoginButton/>)
  }

  return (
    <Navbar position='static' className='mb-4 bg-gray-200'>
      {left}
      {right}
    </Navbar>
  );
};

export default Header;
