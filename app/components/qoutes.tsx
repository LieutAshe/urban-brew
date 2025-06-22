import Image from "next/image";

interface QouteProps {
	imageURL: string;
	qoute: string;
	name: string;
	date: string;
}

export default function Quotes({ imageURL, qoute, name, date }: QouteProps) {
	return (
		<div className="max-w-md h-fit w-full card bg-base-100 shadow-xl p-8 m-4 flex flex-col items-center space-y-4">
			<div className="avatar">
				<div className="w-20 rounded-full ring ring-cprimary ring-offset-base-100 ring-offset-2">
					<Image
						src={imageURL}
						alt="User Avatar"
						width={80}
						height={80}
					/>
				</div>
			</div>
			<blockquote className="text-center">
				<p className="text-lg md:text-xl font-medium text-csecondary">
					{qoute}
				</p>
				<footer className="mt-4 text-csecondary text-sm">
					<cite className="font-semibold">{name}</cite>, <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
				</footer>
			</blockquote>
		</div>
	);
}
