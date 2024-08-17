import "./socialLinksProfile.css";
import Image from "next/image";
import { inter } from "../fonts";

export default function socialLinksProfile() {
	const socialLinks = [
		"GitHub",
		"Frontend Mentor",
		"LinkedIn",
		"Twitter",
		"Instagram",
	];

	function SocialLinkCard({ platform }: { platform: string }) {
		return (
			<div className="bg-grey-700 flex items-center justify-center h-10 mx-4 mb-4 py-6 rounded-md font-bold text-sm hover:bg-green hover:text-black cursor-pointer">
				{platform}
			</div>
		);
	}

	return (
		<main
			className={`${inter.className} text-white bg-grey-900 h-screen flex justify-center items-center `}
		>
			<div className="bg-grey-800 flex flex-col items-center px-2 pb-4 rounded-md">
				<Image
					src="/avatar-jessica.jpeg"
					alt="Profile Picture"
					width={120}
					height={120}
					className="rounded-full my-5"
				/>

				<div className="profileName font-bold text-2xl">Jessica Randall </div>
				<div className="profileLocation font-bold text-green my-2">
					London, United Kingdom
				</div>
				<div className="profileBio my-5 px-2 text-sm  min-[375px]:text-base">
					"Front-end developer and avid reader."
				</div>

				<div className="socialLinks w-full">
					{socialLinks.map((platform, index) => (
						<SocialLinkCard key={index} platform={platform} />
					))}
				</div>
			</div>
		</main>
	);
}
