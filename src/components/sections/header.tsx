"use client";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	NavbarButton,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ThemeController } from "../ui/theme-controller";
import SignInButton from "../auth/signIn";

const Header = () => {
	const navItems = [
		{
			name: "Blog",
			link: "/blog",
		},
		{
			name: "About",
			link: "/about",
		},
		{
			name: "Booking",
			link: "/booking",
		},
	];

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="relative w-full">
			<Navbar>
				{/* Desktop Navigation */}
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className="flex items-center gap-4 text-white">
						<ThemeController variant="secondary" />
						<NavbarButton variant="secondary">
							<SignInButton />
						</NavbarButton>
						<NavbarButton variant="primary">Contact</NavbarButton>
					</div>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</MobileNavHeader>

					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}
					>
						{navItems.map((item, idx) => (
							<a
								key={`mobile-link-${idx}`}
								href={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative text-neutral-600 dark:text-neutral-300"
							>
								<span className="block">{item.name}</span>
							</a>
						))}
						<div className="flex w-full flex-col gap-4">
							<ThemeController variant="primary" />
							<NavbarButton
								onClick={() => setIsMobileMenuOpen(false)}
								variant="primary"
								className="w-full "
							>
								<SignInButton />
							</NavbarButton>
							<NavbarButton
								onClick={() => setIsMobileMenuOpen(false)}
								variant="primary"
								className="w-full "
							>
								Contact
							</NavbarButton>
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>

			{/* Navbar */}
		</div>
	);
};

export default Header;
