import Cards from "./_components/card";
import Link from "next/link";
import { cardData } from "./data/cardData";

export default function Home() {
	return (
		<>
			<main className="h-screen bg-orange-100">
				<header className="px-4 lg:px-6 h-14 flex items-center">
					<nav className="ml-auto flex gap-4 sm:gap-6">
						<Link
							href="#"
							className="font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							Projects
						</Link>
						<Link
							href="#"
							className="font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							About
						</Link>
						<Link
							href="#"
							className="font-medium hover:underline underline-offset-4"
							prefetch={false}
						>
							Contact
						</Link>
					</nav>
				</header>

				<div className="flex flex-col justify-center items-center">
					<div className="text-4xl font-bold text-yellow-950 my-10">
						Explore My UI To Code Implementations
					</div>
				</div>
				<div className="mb-10 mx-10 text-xl text-yellow-700">
					The purpose of this project is twofold: to keep myself accountable and
					to showcase some of the projects I’ve worked on. Additionally, this
					project helps me maintain proficiency in translating designs into
					code. The focus here is on static designs with minimal interactivity,
					ensuring that I continue to sharpen my skills in converting design
					files into accurate, static implementations. All these designs have
					been created using Next.js and Tailwind. No other libraries have been
					used to implement the designs below.
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
					{cardData.map((card, index) => (
						<Cards
							key={index}
							imageUrl={card.imageUrl}
							name={card.name}
							githubUrl={card.githubUrl}
							designUrl={card.designUrl}
							designName={card.designName}
							linkUrl={card.linkUrl}
						/>
					))}
				</div>
			</main>
		</>
	);
}
