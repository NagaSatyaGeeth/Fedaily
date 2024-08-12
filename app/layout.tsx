import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "UI to Code",
	description: "UI designs to code from various sources",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
