import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import "flowbite";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Navigation/Footer";
import { UpToTop } from "@/components/Elements/UpToTop";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Navigation></Navigation>
				<Main />
				<NextScript />

				<Footer></Footer>
				<Script
					src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"
					async
				></Script>
				<Script
					src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/datepicker.min.js"
					async
				></Script>
			</body>
		</Html>
	);
}
