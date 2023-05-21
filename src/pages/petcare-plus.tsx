import { PricingCards } from "@/components/Elements/PricingCards";
import BankNotesIcon from "@/components/Icons/BankNotesIcon";
import Image from "next/image";

export default function PetCarePlus() {
	return (
		<>
			{/* BANNER */}
			<section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-18 xl:py-10">
				<Image
					src={"/images/beautiful-pet-portrait-cat.jpg"}
					loading="lazy"
					alt="Photo by Fakurian Design"
					width={1920}
					height={1080}
					className="absolute inset-0 h-full w-full object-cover object-center"
				/>

				<div className="absolute inset-0 bg-gray-500 mix-blend-multiply"></div>

				<div className="container relative mx-auto px-4 p-20">
					<div className="flex flex-wrap items-center">
						<div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-center text-white text-lg">
							<h1 className="mb-8 text-center text-1xl font-bold text-white sm:text-5xl md:text-6xl">
								Hazte petcare+ ahora
							</h1>
							Disfruta de todas las ventajas que te conlleva ser un petcare+ y
							aprovecha sus increíbles beneficios.
							<div className="mt-6 lg:mb-0 mb-6">
								<a
									href="#precios"
									type="button"
									className="text-white bg-gradient-to-br from-orange-700 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-5 text-center mr-2 mb-2"
								>
									EMPIEZA TU PRUEBA GRATUITA
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="precios">
				<div className="bg-white py-6 sm:py-8 lg:py-12">
					<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
						<div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
							<h2 className="mb-2 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
								Nuestras suscripciones irresistibles 💸
							</h2>
							<p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
								Hazte ahora petcare+ y disfruta de todas estas increíbles
								ventajas.
							</p>
						</div>
						<div className="mb-4 md:mb-16">
							<PricingCards></PricingCards>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
