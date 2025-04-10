"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { NavbarButton } from "./resizable-navbar";

export function ThemeController({
	variant,
}: {
	variant?: "primary" | "secondary";
}) {
	const { theme, setTheme } = useTheme();

	return (
		<NavbarButton
			variant={variant}
			onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
			className="flex items-center justify-center"
		>
			{theme === "dark" ? (
				<Moon className=" h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			) : (
				<Sun className=" h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			)}
		</NavbarButton>
	);
}
