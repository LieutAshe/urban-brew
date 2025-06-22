interface CardProps {
	title: string;
	description: string;
	imageUrl: string;
	price?: string; // Optional price prop
}
export default function Card({
	title,
	description,
	imageUrl,
	price,
}: CardProps) {
	return (
		<div className="card bg-cneutral2/90 w-96 shadow-xl shadow-cprimary">
			<figure className="p-4">
				<img
					src={imageUrl}
					alt={title}
					className="w-full h-48 object-cover rounded-lg"
				/>
			</figure>
			{price && (
			<div className="badge badge-csecondary absolute top-4 right-4">
				{price}
			</div>
			)}
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	);
}
