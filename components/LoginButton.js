import React from "react";
import { Button } from "@nextui-org/react";

const LoginButton = () => {
	return (
		<a href="/login">
			<Button color="primary" radius="sm">
				Log in
			</Button>
		</a>
	);
};

export default LoginButton;
