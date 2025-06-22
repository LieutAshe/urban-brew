import FeaturedSection from "./components/featuredSection";
import Image from "next/image";
import BeanBackground from "./components/beanBG";
import "./globals.css";
import CompiledQuotes from "./components/compiledQoutes";
import Footer from "./components/footer";

export default function Home() {
	return (
		<main>
			<section className="bg-cneutral1 min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 overflow-hidden relative">
				<h1 className="text-4xl md:text-6xl font-extrabold text-cheading tracking-tight ">
					Welcome to Urban Brew
				</h1>
				<p className="text-lg md:text-2xl text-cneutral2 z-10">
					Where Community Meets Coffee
				</p>
				<div className="flex flex-col sm:flex-row gap-4 mt-6 z-10">
					<a
						href="#visit"
						className="bg-cprimary text-cneutral1 px-6 py-3 rounded-full font-medium shadow-md hover:bg-cprimaryDark transition-all duration-200"
					>
						Visit Us
					</a>
					<a
						href="#order"
						className="bg-csecondary text-cneutral2 px-6 py-3 rounded-full font-medium shadow-md hover:bg-csecondaryDark transition-all duration-200"
					>
						Order Online
					</a>
				</div>
				<p className="text-cneutral2 text-lg italic font-light mt-4 max-w-2xl mx-auto absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
					Nestled in the heart of the city, Urban Brew invites you to savor
					artisan espresso, buttery pastries, and meaningful moments—one cup at
					a time.
				</p>
				<BeanBackground />
			</section>
			<FeaturedSection />
			<CompiledQuotes />
			<Footer />
		</main>
	);
}
