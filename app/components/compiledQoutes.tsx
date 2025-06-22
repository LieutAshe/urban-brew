import BeanBackground from "./beanBG";
import Quotes from "./qoutes";

const quotesData = [
	{
		imageURL: "/profiles/Alice.jpg",
		qoute: "Urban Brew has changed my mornings for the better!",
		name: "Alice M.",
		date: "2025-03-10",
	},
	{
		imageURL: "/profiles/Brian.jpg",
		qoute: "The best hidden gem in the city! Their cold brew is top-tier.",
		name: "Brian S.",
		date: "2025-05-12",
	},
	{
		imageURL: "/profiles/Clara.jpg",
		qoute: "Friendly staff and amazing brews every time.",
		name: "Clara N.",
		date: "2025-02-15",
	},
];

export default function CompiledQuotes() {
	return (
		<section className="flex justify-center items-center py-8 bg-cneutral1 relative overflow-hidden">
            {quotesData.map((quote, idx) => (
				<Quotes
					key={idx}
					imageURL={quote.imageURL}
					qoute={quote.qoute}
					name={quote.name}
					date={quote.date}
				/>
			))}
		</section>
	);
}
