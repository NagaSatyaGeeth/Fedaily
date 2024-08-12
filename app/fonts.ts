import { Young_Serif, Outfit } from "next/font/google";

export const youngSerif = Young_Serif({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export const outfit = Outfit({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	display: "swap",
});
