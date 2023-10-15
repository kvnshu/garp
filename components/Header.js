import React from "react";
import { Avatar } from "@nextui-org/avatar";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
} from "@nextui-org/navbar";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Button } from "@nextui-org/button";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Header = async ({ user }) => {
	let left = (
		<NavbarBrand>
			<a href="/" className="text-3xl font-bold ">
				garp
			</a>
		</NavbarBrand>
	);

	let right = <LoginButton />;

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
						<Button color="foreground">
							<Avatar src="" />
						</Button>
					</PopoverTrigger>
					<PopoverContent>
						<div className="px-1 py-2">
							<div className="mb-4">
								<a href="/profile">
									<Button>Profile</Button>
								</a>
							</div>
							<div>
								<LogoutButton />
							</div>
						</div>
					</PopoverContent>
				</Popover>
			</div>
		);
	}

	return (
		<Navbar position="static" className="mb-4 bg-gray-200">
			{left}
			{right}
		</Navbar>
	);
};

export default Header;
