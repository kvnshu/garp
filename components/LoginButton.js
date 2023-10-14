import React from "react";
import { Button } from "@nextui-org/react";

const LoginButton = ({text}) => {
	return (
		<a href="/login">
			<Button color="primary" radius="sm">
				{text ? text : "Log In"}
			</Button>
		</a>
	);
};

export default LoginButton;
