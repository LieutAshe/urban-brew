import Image from "next/image";

const beanPositions = [
    { className: "bottom-[-50%] left-[-20%]" },
    { className: "bottom-[-50%] right-[-20%] scale-x-[-1]" }, // flip horizontally
    { className: "top-[-60%] left-[-5%]" },
    { className: "top-[-60%] right-[-5%] scale-x-[-1]" }, // flip horizontally
];

export default function BeanBackground() {
	return (
		<div className="absolute inset-0 overflow-hidden h-screen">
			{beanPositions.map((pos, idx) => (
				<Image
					key={idx}
					src="/coffee-beans.png"
					alt="Coffee Beans"
					width={600}
					height={300}
					className={`absolute -z-0 mix-blend-multiply opacity-50 ${pos.className}`}
				/>
			))}
			<Image
				src={"/coffee-cover.png"}
				alt="Urban Brew Cover"
				width={400}
				height={200}
				className="absolute z-0 w-1/8 top-1/2 left-20 xl:left-28 -rotate-30 transform -translate-y-1/2 opacity-100"
			/>
			<Image
				src={"/coffee-cover.png"}
				alt="Urban Brew Cover"
				width={400}
				height={200}
				className="absolute z-0 w-1/8 top-1/2 right-20 xl:right-28 rotate-30 transform -translate-y-1/2 opacity-100 scale-x-[-1]"
			/>
			<Image
				src={"/logo-transparent.png"}
				alt="Urban Brew Logo"
				width={200}
				height={200}
				className="absolute z-10 top-2 left-1/2 -translate-x-1/2 mix-blend-multiply opacity-100"
			/>

		</div>
	);
}
