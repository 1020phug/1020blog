// import Hero from "@/components/hero-section";
// import { BackgroundLines } from "@/components/ui/background-lines";
// import ColourfulText from "@/components/ui/colourful-text";
"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "motion/react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export default function Home() {
	// <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
	// 	<h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
	// 		Closed-Source Operating System but, <br />{" "}
	// 		<ColourfulText text="Tenzo" />.
	// 	</h2>
	// 	<p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
	// 		Get the best advices from our experts, including expert artists,
	// 		painters, marathon enthusiasts and RDX, totally free.
	// 	</p>
	// </BackgroundLines>
	// <Hero />
	const images = [
		"https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	];
	return (
		<ImagesSlider className="h-[40rem]" images={images}>
			<motion.div
				initial={{
					opacity: 0,
					y: -80,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.6,
				}}
				className="z-50 flex flex-col justify-center items-center"
			>
				<motion.div className="font-bold text-xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
					<TextGenerateEffect
						words={`Closed-source Operating System but, Tenzo.`}
					/>
					<br />
					<ContainerTextFlip
						words={[
							"Cause",
							"when",
							"a",
							"heart",
							"break",
							"and",
							"it's",
							"don't",
							"breakeven",
						]}
					/>
				</motion.div>

				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: 0.3,
						delay: 1,
					}}
					className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
				>
					<button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
						<span>Join us</span>
						<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
					</button>
					<button className="px-4 py-2 backdrop-blur-sm border bg-primary border-emerald-500/20 text-primary-foreground mx-auto text-center rounded-full relative mt-4">
						<span>Contact →</span>
						<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
					</button>
				</motion.div>
			</motion.div>
		</ImagesSlider>
	);
}
