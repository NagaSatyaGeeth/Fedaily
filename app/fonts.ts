import { Young_Serif, Outfit } from "next/font/google";
import { Inter } from "next/font/google";
import { Figtree } from "next/font/google";

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

export const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	display: "swap",
});

export const figtree = Figtree({
	subsets: ["latin"],
	weight: ["500", "800"],
	display: "swap",
});
