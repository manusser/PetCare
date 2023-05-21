import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "flowbite";
import { UpToTop } from "@/components/Elements/UpToTop";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/Navigation/Navigation";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>PetCare - Encuentra cuidadores por todo el mundo</title>
			</Head>
			<NextNProgress
				color="#fc8c03"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>

			<UpToTop />
			<Navigation></Navigation>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}
