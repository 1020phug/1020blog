import heroImg from "../../assets/img/statics/hero.jpg";

export default function Hero() {
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col gap-16 lg:flex-row-reverse">
				<img src={heroImg} className="max-w-sm rounded-lg shadow-2xl" />
				<div>
					<h1 className="text-5xl font-bold">
						Welcome to
						<span className="text-primary"> 1020</span>
						Blog
					</h1>
					<p className="py-6">
						Hi mate ! Welcome to 1020Blog. This is a simple blog of Tenzo.
					</p>
					<button className="btn btn-primary">
						<a href="#news">Get Started</a>
					</button>
				</div>
			</div>
		</div>
	);
}
