import "./blogPreviewCard.css";
import Image from "next/image";
import { figtree } from "../fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog Preview Card",
	openGraph: {
		images: {
			url: "/images/blogPreviewCard/blogPreviewCardImage.webp",
			alt: "Blog Preview Card image",
		},
	},
};

export default function blogPreviewCard() {
	return (
		<main
			className={`${figtree.className} bg-yellow h-screen flex flex-col justify-center items-center text-gray-950 `}
		>
			<div className="bg-white rounded-2xl border-gray-950 p-6 border-2 border-r-8 border-b-8">
				<div>
					<Image
						src="/images/blogPreviewCard/illustration-article.svg"
						alt="recipePage"
						width={279}
						height={200}
						className="rounded-2xl"
					/>
				</div>

				<div className="mt-4 px-2 py-1 bg-yellow rounded-md  font-bold inline-block  ">
					Learning
				</div>
				<div className="mt-2 ">Published 21 Dec 2023</div>
				<div className="mt-2 font-bold">HTML & CSS foundations</div>
				<div className="mt-2 text-gray-500 ">
					<p>These languages are the backbone </p>
					<p>of every website, defining structure, </p>
					<p>content, and presentation.</p>
				</div>
				<div className="flex items-center gap-4 -mb-4">
					<Image
						src="/images/blogPreviewCard/image-avatar.webp"
						alt="Profile Picture"
						width={40}
						height={40}
						className="rounded-full my-5"
					/>
					<div className="font-bold">Greg Hooper</div>
				</div>
			</div>
			<div className="text-center mt-24">
				Challenge by{" "}
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
