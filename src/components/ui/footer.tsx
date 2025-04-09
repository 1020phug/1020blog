import Image from "next/image";
import LogoImage from "@/assets/images/logo.webp";
import Link from "next/link";

interface MenuItem {
	title: string;
	links: {
		text: string;
		url: string;
	}[];
}

interface FooterProps {
	logo?: {
		url: string;
		src: string;
		alt: string;
		title: string;
	};
	tagline?: string;
	menuItems?: MenuItem[];
	copyright?: string;
	bottomLinks?: {
		text: string;
		url: string;
	}[];
}

const Footer = ({
	logo = {
		src: LogoImage.src,
		alt: "1020blog",
		title: "1020blog",
		url: "/",
	},
	tagline = "Closed-source operating system but, Tenzo.",
	menuItems = [
		{
			title: "Blog",
			links: [
				{ text: "Latest Posts", url: "#" },
				{ text: "Development", url: "#" },
				{ text: "Fitness", url: "#" },
				{ text: "Slice of Life", url: "#" },
				{ text: "Philosophy", url: "#" },
			],
		},
		{
			title: "Careers",
			links: [
				{ text: "About", url: "#" },
				{ text: "Projects", url: "#" },
				{ text: "Contact", url: "#" },
				{ text: "Privacy", url: "#" },
			],
		},
		{
			title: "Resources",
			links: [
				{ text: "Help", url: "#" },
				{ text: "Sales", url: "#" },
				{ text: "Advertise", url: "#" },
			],
		},
		{
			title: "Social",
			links: [
				{ text: "Twitter", url: "#" },
				{ text: "Instagram", url: "#" },
				{ text: "LinkedIn", url: "#" },
			],
		},
	],
	copyright = "© 2025 1020blog. All rights reserved.",
	bottomLinks = [
		{ text: "Terms and Conditions", url: "#" },
		{ text: "Privacy Policy", url: "#" },
	],
}: FooterProps) => {
	return (
		<section className="py-32 w-screen bg-background">
			<div className="container w-screen mx-auto">
				<footer className="">
					<div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
						<div className="col-span-2 mb-8 lg:mb-0">
							<div className="flex items-center gap-2 lg:justify-start">
								<Link href="/">
									<Image
										width={32}
										height={32}
										loading="lazy"
										src={logo.src}
										alt={logo.alt}
										title={logo.title}
										className="h-10 object-cover"
									/>
								</Link>
								<p className="text-xl font-semibold">{logo.title}</p>
							</div>
							<p className="mt-4 font-bold">{tagline}</p>
						</div>
						{menuItems.map((section, sectionIdx) => (
							<div key={sectionIdx}>
								<h3 className="mb-4 font-bold">{section.title}</h3>
								<ul className="space-y-4 text-muted-foreground">
									{section.links.map((link, linkIdx) => (
										<li
											key={linkIdx}
											className="font-medium hover:text-primary"
										>
											<a href={link.url}>{link.text}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
						<p>{copyright}</p>
						<ul className="flex gap-4">
							{bottomLinks.map((link, linkIdx) => (
								<li key={linkIdx} className="underline hover:text-primary">
									<a href={link.url}>{link.text}</a>
								</li>
							))}
						</ul>
					</div>
				</footer>
			</div>
		</section>
	);
};

export { Footer };
