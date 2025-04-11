"use client";

import { login } from "@/lib/action";

const SignInButton = () => {
	return <span onClick={() => login()}>Sign in with GitHub</span>;
};

export default SignInButton;
