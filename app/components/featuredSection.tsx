import Card from "./card";

export default function FeaturedSection() {
	return (
		<section className="bg-cneutral2 py-16 min-h-screen relative overflow-hidden">
			<div className="absolute inset-0 bg-[url('/coffee-serve.jpg')] bg-no-repeat bg-cover bg-center opacity-100 pointer-events-none z-0 blur-md" />
			<div className="w-full mx-auto text-center mb-12 relative z-10 bg-cneutral2">
				<h2 className="text-3xl md:text-4xl font-extrabold text-heading">
					Our Featured Brews
				</h2>
				<p className="text-neutral2 mt-2">
					Discover the richness of our most-loved handcrafted blends.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
				<Card
					title="Espresso Roast"
					description="A bold and rich dark roast with deep caramel and chocolate notes."
					imageUrl="/espresso.png"
					price="₱140.00"
				/>
				<Card
					title="Vanilla Cold Brew"
					description="Smooth, cold-steeped coffee infused with natural vanilla."
					imageUrl="/vanilla-cold-brew.png"
					price="₱160.00"
				/>
				<Card
					title="Hazelnut Latte"
					description="Creamy and nutty delight topped with frothed milk and hazelnut syrup."
					imageUrl="/hazelnut-latte.png"
					price="₱155.00"
				/>
			</div>
			<div className="text-center mt-12">
				<button className="relative overflow-hidden btn btn-primary group">
					<span className="block transition-transform duration-300 group-hover:-translate-x-[180%]">
						Want to see more?
					</span>
					<span className="absolute left-0 top-0 w-full h-full flex items-center justify-center transition-transform duration-300 translate-x-[-100%] group-hover:translate-x-0">
						YES!
					</span>
				</button>
			</div>
		</section>
	);
}
