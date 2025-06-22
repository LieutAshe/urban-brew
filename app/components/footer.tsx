import Image from "next/image";

export default function Footer() {
	return (
		<footer className="footer sm:footer-horizontal bg-cneutral2 text-neutral-content items-center p-2 justify-center">
			<aside className="grid-flow-col items-center">
                <Image alt="" src="/logo-transparent.png" width={75} height={75} className="mix-blend-multiply"/>
				<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
			</aside>
		</footer>
	);
}
    