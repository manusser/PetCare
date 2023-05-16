import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import "flowbite";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Navigation/Footer";
import { UpToTop } from "@/components/Elements/UpToTop";
import { useEffect, useState } from "react";
import isAuthenticated from "@/lib/isAuthenticated";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
					rel="stylesheet"
				/>
				<link
					href="https://unpkg.com/aos@2.3.1/dist/aos.css"
					rel="stylesheet"
				></link>
			</Head>
			<body>
				
				<Main />
				<NextScript />

				<Footer></Footer>
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"
					async
				></script>
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/datepicker.min.js"
					async
				></script>
			</body>
		</Html>
	);
}
