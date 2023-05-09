import { PricingCards } from "@/components/Elements/PricingCards";
import BankNotesIcon from "@/components/Icons/BankNotesIcon";
import Image from "next/image";

export default function BecomeASitter() {
	return (
		<>
			{/* BANNER */}
			<section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-18 xl:py-10">
				<Image
					src={"/images/front-view-young-girl-with-her-doggie.jpg"}
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
								Obtén ingresos cuidando mascotas
							</h1>
							En petcare te lo ponemos fácil: crea una cuenta en nuestra
							plataforma y empieza a obtener ingresos desde el primer día.
							<div className="mt-6 lg:mb-0 mb-6">
								<button
									type="button"
									data-te-ripple-init
									data-te-ripple-color="light"
									className="bg-orange-400 text-white active:bg-orange-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition duration-150 ease-in-out"
								>
									<span className="flex gap-2">
										Conviértete en Cuidador{" "}
										<BankNotesIcon
											width="6"
											height="6"
											color="white"
										></BankNotesIcon>
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="border-1 rounded-lg">
				<div className="bg-white py-6 sm:py-8 lg:py-12">
					<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
						<div className="mb-10 md:mb-16">
							<section className="bg-fixed rounded-lg bg-center bg-no-repeat bg-cover bg-[url('/images/beagle-tricolor-puppies-are-posing-wooden-box-cute-doggies-pets-playing-grey-wall-look-attented-playful-concept-motion-movement-action-negative-space.jpg')] bg-gray-500 bg-blend-multiply">
								<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
									<div className="max-w-screen-md mb-8 lg:mb-16">
										<h2 className="mb-4 text-4xl font-bold tracking-tight text-white dark:text-white">
											Diseñado para gente como tu.
										</h2>
										<p className="text-white sm:text-xl dark:text-gray-400">
											Conviértete en cuidador de mascotas y empieza a ganar
											dinero haciendo lo que más te gusta. Flexibilidad y
											control en todos los aspectos.
										</p>
									</div>
									<div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
										<div className="bg-white p-4 rounded-lg">
											<div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
												<svg
													className="w-5 h-5 text-black lg:w-6 lg:h-6 dark:text-primary-300"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
											<h3 className="mb-2 text-xl text-black">
												Tu pones los precios
											</h3>
											<p className="text-black">
												¡Eso es! Tu pones los precios y fechas, nosotros te
												ayudamos a que salga en nuestra plataforma.
											</p>
										</div>
										<div className="bg-white p-4 rounded-lg">
											<div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
												<svg
													className="w-5 h-5 text-black lg:w-6 lg:h-6 dark:text-primary-300"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
												</svg>
											</div>
											<h3 className="mb-2 text-xl text-black">
												Ofrece servicios
											</h3>
											<p className="text-black">
												Ofrece los servicios que quieras prestar y con los que
												estés más cómodo/a.
											</p>
										</div>
										<div className="bg-white p-4 rounded-lg">
											<div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
												<svg
													className="w-5 h-5 text-black lg:w-6 lg:h-6 dark:text-primary-300"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
														clipRule="evenodd"
													/>
													<path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
												</svg>
											</div>
											<h3 className="mb-2 text-xl text-black">
												Plataforma fácil e intuitiva
											</h3>
											<p className="text-black">
												Controla todas tus reservas y servicios desde tu panel
												de usuario. Fácil y rápido, sin complicaciones.
											</p>
										</div>
									</div>
								</div>
							</section>
						</div>

						<div className="block md:flex">
							<figure className="max-w-screen-md">
								<div className="flex items-center mb-4 text-yellow-300">
									<svg
										aria-hidden="true"
										className="w-7 h-7"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										aria-hidden="true"
										className="w-7 h-7"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										aria-hidden="true"
										className="w-7 h-7"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										aria-hidden="true"
										className="w-7 h-7"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										aria-hidden="true"
										className="w-7 h-7"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
								<blockquote>
									<p className="text-2xl font-semibold text-gray-900 dark:text-white">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Obcaecati fugit doloremque commodi nulla accusamus suscipit
										ipsa magnam numquam cumque sunt consectetur deleniti sequi
										ipsam natus maxime, nihil odio temporibus quasi!
									</p>
								</blockquote>
								<figcaption className="flex items-center mt-6 space-x-3">
									<Image
										className="w-6 h-6 rounded-full"
										src="/images/bonnie-green.png"
										alt="profile picture"
										width={24}
										height={24}
									/>
									<div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
										<cite className="pr-3 font-medium text-gray-900 dark:text-white">
											Bonnie Jhay
										</cite>
										<cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
											Cliente
										</cite>
									</div>
								</figcaption>
							</figure>
							<figure className="max-w-screen-md">
								<div className="flex items-center mb-4 text-yellow-300">
									<svg
										aria-hidden="true"
										className="w-7 h-7"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										aria-hidden="true"
										className="w-7 h-7"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										aria-hidden="true"
										className="w-7 h-7"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										aria-hidden="true"
										className="w-7 h-7"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<svg
										aria-hidden="true"
										className="w-7 h-7"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								</div>
								<blockquote>
									<p className="text-2xl font-semibold text-gray-900 dark:text-white">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Vitae, at iure esse molestias recusandae eaque corporis
										fugiat, nesciunt beatae autem nihil odit ea iste perferendis
										culpa nam accusamus. Quas, quam.
									</p>
								</blockquote>
								<figcaption className="flex items-center mt-6 space-x-3">
									<Image
										className="w-6 h-6 rounded-full"
										src="/images/bonnie-green.png"
										alt="profile picture"
										width={24}
										height={24}
									/>
									<div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
										<cite className="pr-3 font-medium text-gray-900 dark:text-white">
											Jeff Green
										</cite>
										<cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
											Cliente
										</cite>
									</div>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
