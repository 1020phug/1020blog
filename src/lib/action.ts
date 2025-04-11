"use server";
import { signIn, signOut } from "@/auth";

export const login = async () => {
	await signIn("github", { redirect: true });
};

export const logout = async () => {
	await signOut({ redirect: true });
};
