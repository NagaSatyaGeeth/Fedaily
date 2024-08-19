import "./blogPreviewCard.css";
import Image from "next/image";
import { figtree } from "../fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog Preview Card",
	openGraph: {
		images: {
			url: "/blogPreviewCardImage.webp",
			alt: "Blog Preview Card image",
		},
	},
};

export default function socialLinksProfile() {
	return (
		<main
			className={`${figtree.className} bg-yellow h-screen flex flex-col justify-center items-center `}
		>
			<div className="text-center mt-24">
				Challenge by
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					className="underline underline-offset-2 text-blue-600"
				>
					Frontend Mentor
				</a>
				. Coded by
				<a
					href="https://github.com/NagaSatyaGeeth/"
					className="underline underline-offset-2 text-blue-600"
				>
					Naga
				</a>
				.
			</div>
		</main>
	);
}
