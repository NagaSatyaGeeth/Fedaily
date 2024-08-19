import "./recipePage.css";
import Image from "next/image";
import { youngSerif, outfit } from "../fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Recipe Page",
	openGraph: {
		images: {
			url: "/images/recipeCard/recipeCardImage.webp",
			alt: "Recipe Card Image",
		},
	},
};

export default function RecipePage() {
	return (
		<main className="bg-stone-100 sm:p-10 lg:p-20 xl:px-96 xl:py-28 2xl:px-[30rem] ">
			<div
				className={`${outfit.className} bg-white sm:rounded-2xl sm:p-10 xl:p-10 `}
			>
				<div>
					<Image
						src="/images/recipeCard/recipePageImage.jpeg"
						alt="recipePage"
						layout="responsive"
						width={1920}
						height={1080}
						sizes="(max-width: 600px) 100vw, 
				       (max-width: 1200px) 50vw, 
				       33vw"
						className="w-full h-auto sm:rounded-2xl"
					/>
				</div>
				<div className="recipe-container mx-5">
					<div className="recipe-header my-5">
						<div className={`${youngSerif.className} text-3xl text-stone-900`}>
							Simple Omelette Recipe
						</div>
					</div>

					<div className="recipe-description  my-5 text-stone-600 text-base">
						<p>
							An easy and quick dish, perfect for any meal. This classic
							omelette combines beaten eggs cooked to perfection, optionally
							filled with your choice of cheese, vegetables, or meats.
						</p>
					</div>

					<div className="recipe-preparation-time bg-rose-50 p-5 rounded-xl">
						<h2 className="recipe-preparation-time text-rose-800 font-bold mb-3 text-xl ">
							Preparation time
						</h2>
						<ul className="list-disc marker:text-rose-800 px-5 text-stone-600 space-y-2">
							<li className="pl-3">
								<span className=" font-bold ">Total: </span>
								Approximately 10 minutes
							</li>
							<li className="pl-3">
								<span className=" font-bold">Preparation: </span>5 minutes
							</li>
							<li className="pl-3">
								<span className=" font-bold">Cooking: </span>5 minutes
							</li>
						</ul>
					</div>

					<div className="recipe-ingredients my-5">
						<div
							className={`${youngSerif.className} text-2xl text-brown-800 mb-5`}
						>
							Ingredients
						</div>
						<ul className="list-disc marker:text-brown-800 px-5 text-stone-600 space-y-2">
							<li className="pl-3">2-3 large eggs</li>
							<li className="pl-3">Salt, to taste</li>
							<li className="pl-3">Pepper, to taste</li>
							<li className="pl-3">1 tablespoon of butter or oil</li>
							<li className="pl-3">
								Optional fillings: cheese, diced vegetables, cooked meats, herbs
							</li>
						</ul>
					</div>

					<hr />

					<div className="recipe-instructions my-5">
						<div
							className={`${youngSerif.className} text-2xl text-brown-800 my-5`}
						>
							Instructions
						</div>
						<ol className="list-decimal marker:text-rose-800 marker:font-bold px-5 text-stone-600 space-y-2">
							<li className="pl-3">
								<strong>Beat the eggs:</strong> In a bowl, beat the eggs with a
								pinch of salt and pepper until they are well mixed. You can add
								a tablespoon of water or milk for a fluffier texture.
							</li>
							<li className="pl-3">
								<strong>Heat the pan:</strong> Place a non-stick frying pan over
								medium heat and add butter or oil.
							</li>
							<li className="pl-3">
								<strong>Cook the omelette:</strong> Once the butter is melted
								and bubbling, pour in the eggs. Tilt the pan to ensure the eggs
								evenly coat the surface.
							</li>
							<li className="pl-3">
								<strong>Add fillings (optional):</strong> When the eggs begin to
								set at the edges but are still slightly runny in the middle,
								sprinkle your chosen fillings over one half of the omelette.
							</li>
							<li className="pl-3">
								<strong>Fold and serve:</strong> As the omelette continues to
								cook, carefully lift one edge and fold it over the fillings. Let
								it cook for another minute, then slide it onto a plate.
							</li>
							<li className="pl-3">
								<strong>Enjoy:</strong> Serve hot, with additional salt and
								pepper if needed.
							</li>
						</ol>
					</div>

					<hr />

					<div className="recipe-nutrition">
						<h2
							className={`${youngSerif.className} text-2xl text-brown-800 my-5`}
						>
							Nutrition
						</h2>
						<p className="text-stone-600 ">
							The table below shows nutritional values per serving without the
							additional fillings.
						</p>
						<ul className="text-stone-600 my-5 space-y-3">
							<li className="grid grid-cols-2 ml-10">
								<strong>Calories</strong>
								<span className="text-brown-800 font-bold ">277kcal</span>
							</li>
							<hr />
							<li className="grid grid-cols-2 ml-10">
								<strong>Carbs</strong>{" "}
								<span className="text-brown-800 font-bold "> 0g</span>
							</li>
							<hr />
							<li className="grid grid-cols-2 ml-10">
								<strong>Protein</strong>{" "}
								<span className="text-brown-800 font-bold ">20g</span>
							</li>
							<hr />
							<li className="grid grid-cols-2 ml-10  pb-6 sm:pb-0">
								<strong>Fat</strong>{" "}
								<span className="text-brown-800 font-bold ">22g</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="text-center mt-24">
				Challenge by {""}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					className="underline underline-offset-2 text-blue-600"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
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
