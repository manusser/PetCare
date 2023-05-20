import Image from "next/image";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation/Navigation";
import SearchIcon from "@/components/Icons/SearchIcon";
import Sponsors from "@/components/Elements/Sponsors";
import MoonIcon from "@/components/Icons/MoonIcon";
import { UpToTop } from "@/components/Elements/UpToTop";
import Link from "next/link";
import HomeIcon from "@/components/Icons/HomeIcon";
import PawWalkIcon from "@/components/Icons/PawWalkIcon";
import HouseMoonIcon from "@/components/Icons/HouseMoonIcon";
import SunIcon from "@/components/Icons/SunIcon";
import { useEffect } from "react";
import { getToken } from "@/controllers/userController";
import isAuthenticated from "@/lib/isAuthenticated";
import SearchForm from "@/components/Home/SearchForm";

export default function Home() {

	return (
		<>
			{/* BANNER */}
			<section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-18 xl:py-10">
				<Image
					src={"/images/73977.jpg"}
					loading="lazy"
					alt="Photo by Fakurian Design"
					width={1920}
					height={1080}
					className="absolute inset-0 h-full w-full object-cover object-center"
				/>

				<div className="absolute inset-0 bg-gray-700 mix-blend-multiply"></div>

				<div className="relative flex flex-col items-center">
					<h1 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl md:text-5xl">
						Encuentre cuidadores de mascotas
					</h1>

					{/* <section className="mb-4">
						<p className="mb-4 mt-2 text-center text-lg text-indigo-100 sm:text-xl md:mb-2 md:mt-5">
							¿Qué servicio buscas?
						</p>
						<ul className="grid w-auto gap-6 md:grid-cols-2">
							<li>
								<input
									type="radio"
									id="service1"
									name="hosting"
									defaultValue="service1"
									className="hidden peer"
								/>
								<label
									htmlFor="service1"
									className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
								>
									<div className="block">
										<div className="flex gap-2 w-full text-lg font-semibold">
											Cuidado en hogar <HomeIcon></HomeIcon>
										</div>
										<div className="w-full">
											Deja a tu mascota en un hogar verificado.
										</div>
									</div>
								</label>
							</li>
							<li>
								<input
									type="radio"
									id="service2"
									name="hosting"
									defaultValue="service2"
									className="hidden peer"
								/>
								<label
									htmlFor="service2"
									className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
								>
									<div className="block">
										<div className="w-full text-lg font-semibold flex gap-2">
											Paseos <PawWalkIcon></PawWalkIcon>
										</div>
										<div className="w-full">Dale paseos a tu mascota.</div>
									</div>
								</label>
							</li>
							<li>
								<input
									type="radio"
									id="service3"
									name="hosting"
									defaultValue="service3"
									className="hidden peer"
								/>
								<label
									htmlFor="service3"
									className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
								>
									<div className="block">
										<div className="w-full text-lg font-semibold flex gap-2">
											Cuida casas <HouseMoonIcon></HouseMoonIcon>
										</div>
										<div className="w-full">
											Alguien irá a tu hogar a cuidar de el/ella.
										</div>
									</div>
								</label>
							</li>
							<li>
								<input
									type="radio"
									id="service4"
									name="hosting"
									defaultValue="service4"
									className="hidden peer"
								/>
								<label
									htmlFor="service4"
									className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
								>
									<div className="block">
										<div className="w-full text-lg font-semibold flex gap-2">
											Guarderías <SunIcon></SunIcon>
										</div>
										<div className="w-full">
											Cuidan de tu mascota una larga temporada.
										</div>
									</div>
								</label>
							</li>
						</ul>
					</section> */}

					<section className="mb-4">
						<SearchForm></SearchForm>
					</section>

				</div>
			</section>

			{/* FEATURES */}
			<section>
				<div className="bg-white py-6 sm:py-8 lg:py-12">
					<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
						{/* text - start */}
						<div className="mb-10 md:mb-16">
							<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
								Servicios para todos tus compañeros de vida 😻
							</h2>
						</div>
						{/* text - end */}

						<div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-2 xl:gap-16">
							{/* feature - start */}
							<div className="flex gap-4 md:gap-6">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
									<MoonIcon color="white"></MoonIcon>
								</div>
								<div>
									<h3 className="mb-2 text-lg font-semibold md:text-xl">
										Duermen en casa de los cuidadores
									</h3>
									<p className="mb-2 text-gray-500">
										Como oyes, tus mascotas pasarán la noche en casa de sus
										cuidadores. No te preocupes por nada, serán tratados como si
										fueran parte de la familia.
									</p>
								</div>
							</div>
							{/* feature - end */}
							{/* feature - start */}
							<div className="flex gap-4 md:gap-6">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="mb-2 text-lg font-semibold md:text-xl">
										Paseadores
									</h3>
									<p className="mb-2 text-gray-500">
										Exacto, si quieres que den un paseo a tu mascota, también
										puedes buscar a gente maravillosa que lo haga.
									</p>
								</div>
							</div>
							{/* feature - end */}
							{/* feature - start */}
							<div className="flex gap-4 md:gap-6">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="mb-2 text-lg font-semibold md:text-xl">
										Van a tu hogar a hacerles visitas
									</h3>
									<p className="mb-2 text-gray-500">
										Como en casa, en ningún sitio, ¡y eso lo sabemos de sobra!
										Pueden ir a tu casa a hacerles visitas y jugar con ellos.
									</p>
								</div>
							</div>
							{/* feature - end */}
							{/* feature - start */}
							<div className="flex gap-4 md:gap-6">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="mb-2 text-lg font-semibold md:text-xl">
										¿Un peinado o un baño express?
									</h3>
									<p className="mb-2 text-gray-500">
										Hay gente fantástica en PetCare que puede ofrecer este tipo
										de servicios a tus amigos peludos.
									</p>
								</div>
							</div>
							{/* feature - end */}
							{/* feature - start */}
							<div className="flex gap-4 md:gap-6">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="mb-2 text-lg font-semibold md:text-xl">
										¿Necesitan entrenamiento?
									</h3>
									<p className="mb-2 text-gray-500">
										También lo puedes encontrar en PetCare, gente que te puede
										ayudar a entrenar a tu mascota.
									</p>
								</div>
							</div>
							{/* feature - end */}
							{/* feature - start */}
							<div className="flex gap-4 md:gap-6">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-400 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="mb-2 text-lg font-semibold md:text-xl">
										Veterinarios, ¿necesitas ayuda?
									</h3>
									<p className="mb-2 text-gray-500">
										En PetCare también hay expertos en salud veterinaria que te
										pueden ayudar.
									</p>
								</div>
							</div>
							{/* feature - end */}
						</div>
					</div>
				</div>
			</section>

			{/* CATEGORIES */}
			<section className="bg-center bg-no-repeat bg-[url('/images/beautiful-shot-sleeping-black-cat.jpg')] bg-gray-700 bg-blend-multiply">
				<div className="py-6 sm:py-8 lg:py-12">
					<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
						<h2 className="mb-8 text-center text-2xl font-bold text-white md:mb-12 lg:text-3xl">
							Servicios que ofrecen nuestros cuidadores 📖
						</h2>
						<div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
							{/* product - start */}
							<div>
								<a
									href="#"
									className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
								>
									<Image
										src="/images/feature-image-1.jpg"
										loading="lazy"
										alt="Foto de cuidado de mascotas"
										width={600}
										height={400}
										className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
									/>
									<div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
										<span className="text-lg font-bold text-gray-800 lg:text-xl">
											Cuidado de mascotas
										</span>
									</div>
								</a>
							</div>
							{/* product - end */}
							{/* product - start */}
							<div>
								<a
									href="#"
									className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
								>
									<Image
										src="/images/young-woman-taking-bath-with-her-favorite-dog-world-dog-love-day-concept.jpg"
										loading="lazy"
										alt="Foto de peluquería, baños, tratamientos..."
										width={600}
										height={400}
										className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
									/>
									<div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
										<span className="text-lg font-bold text-gray-800 lg:text-xl">
											Peluquería, baños, tratamientos...
										</span>
									</div>
								</a>
							</div>
							{/* product - end */}
							{/* product - start */}
							<div>
								<a
									href="#"
									className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
								>
									<Image
										src="/images/woman-having-walk-park-with-her-pug-dog-pet_1303-23799.png"
										loading="lazy"
										alt="Foto de un perro paseando"
										width={600}
										height={400}
										className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
									/>
									<div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
										<span className="text-lg font-bold text-gray-800 lg:text-xl">
											Paseos
										</span>
									</div>
								</a>
							</div>
							{/* product - end */}
							{/* product - start */}
							<div>
								<a
									href="#"
									className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
								>
									<Image
										src="/images/close-up-veterinary-doctor-taking-care-pet_23-2149267934.png"
										loading="lazy"
										alt="Photo by Austin Wade"
										width={600}
										height={400}
										className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
									/>
									<div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
										<span className="text-lg font-bold text-gray-800 lg:text-xl">
											Veterinaria
										</span>
									</div>
								</a>
							</div>
							{/* product - end */}
						</div>

						<p className="text-gray-400 text-center pt-10 text-xl">
							Estos servicios y muchos más están disponibles en PetCare. Échale
							un vistazo entrando a la sección de búsqueda y encuentra lo que
							necesites.
						</p>
					</div>
				</div>
			</section>

			{/* SPONSORS */}
			<section>
				<Sponsors />
			</section>

			{/* REGISTER BANNER */}
			<div className="bg-white py-10 sm:py-10 lg:py-14">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
						{/* content - start */}
						<div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
							<h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
								Únete a nuestra comunidad
								<br />
								Hazte{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500">
									petcare+
								</span>
							</h2>
							<p className="mb-8 max-w-md text-white">
								Obtén ventajas exclusivas convirtiéndote en petcare+. Pruébalo
								ahora totalmente gratis durante 14 días. Cancela cuando quieras.
							</p>
							<div className="mt-auto">
								<Link
									href="/petcare-plus"
									className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
								>
									Empieza tu prueba gratuita
								</Link>
							</div>
						</div>
						{/* content - end */}
						{/* image - start */}
						<div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
							<img
								src="/images/beautiful-dog-looking-away-with-copy-space_23-2148366827.png"
								loading="lazy"
								alt="Photo by Dom Hill"
								className="h-full w-full object-cover object-center"
							/>
						</div>
						{/* image - end */}
					</div>
				</div>
			</div>
		</>
	);
}
