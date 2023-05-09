export const PricingCards = () => {
	return (
		<>
			<div className="mb-4 border-b border-gray-200 dark:border-gray-700 m-auto">
				<ul
					className="flex flex-wrap -mb-px text-lg font-medium text-center content-center justify-center"
					id="myTab"
					data-tabs-toggle="#myTabContent"
					role="tablist"
				>
					<li className="mr-2" role="presentation">
						<button
							className="aria-selected:bg-orange-400 aria-selected:text-white inline-block active:font-bold enabled:text-black  p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
							id="profile-tab"
							data-tabs-target="#profile"
							type="button"
							role="tab"
							aria-controls="profile"
							aria-selected="false"
						>
							Propietario
						</button>
					</li>
					<li className="mr-2" role="presentation">
						<button
							className="aria-selected:bg-orange-400 aria-selected:text-white inline-block active:font-bold p-4 enabled:text-black  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
							id="dashboard-tab"
							data-tabs-target="#dashboard"
							type="button"
							role="tab"
							aria-controls="dashboard"
							aria-selected="false"
						>
							Cuidador
						</button>
					</li>
				</ul>
			</div>
			<div id="myTabContent">
				<div
					className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
					id="profile"
					role="tabpanel"
					aria-labelledby="profile-tab"
				>
					<section className="bg-white dark:bg-gray-900">
						<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
							<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-3 xl:gap-8 lg:space-y-0">
								{/* Pricing Card */}
								<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
									<h3 className="mb-4 text-2xl font-semibold">
										Premium petcare+
									</h3>
									<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
										Da el salto a una suscripción premium.
									</p>
									<div className="flex justify-center items-baseline my-8">
										<span className="mr-2 text-5xl font-extrabold">219 €</span>
										<span className="text-gray-500 dark:text-gray-400">
											/ año
										</span>
									</div>
									<a
										href="#"
										className="mb-8 text-white bg-orange-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
									>
										Empiece su prueba gratuita ( <small>14 días</small> )
									</a>
									{/* List */}
									<ul role="list" className="mb-8 space-y-4 text-left">
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Cuidado ilimitado de mascotas y del hogar de cuidadores
												verificados sin costo adicional.
											</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Protección del hogar y contenidos.</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Garantía de devolución del dinero.</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Videollamadas gratuitas con veterinarios, en cualquier
												momento que necesite.
											</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Soporte dedicado para miembros</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Mejora tu listado en los resultados de búsqueda
											</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Ver quién guarda tu listado</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>2 pases globales a la sala VIP del aeropuerto</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Sentarse seguro de cancelación</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Insignia premium en tu anuncio</span>
										</li>
									</ul>
								</div>
								{/* Pricing Card */}
								<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-orange-50 rounded-lg border border-gray-300 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
									<h3 className="mb-4 text-2xl font-semibold">
										Standar petcare+
									</h3>
									<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
										Para los que quieren más visibilidad.
									</p>
									<div className="flex justify-center items-baseline my-8">
										<span className="mr-2 text-5xl font-extrabold">149 €</span>
										<span className="text-gray-500 dark:text-gray-400 ">
											/ año
										</span>
									</div>
									<a
										href="#"
										className="mb-8 text-white bg-orange-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
									>
										Empiece su prueba gratuita ( <small>14 días</small> )
									</a>
									{/* List */}
									<ul role="list" className="mb-8 space-y-4 text-left">
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Cuidado ilimitado de mascotas y del hogar de cuidadores
												verificados sin costo adicional.
											</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Protección del hogar y contenidos.</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Garantía de devolución del dinero.</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Videollamadas gratuitas con veterinarios, en cualquier
												momento que necesite.
											</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Soporte dedicado para miembros</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Mejora tu listado en los resultados de búsqueda
											</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Ver quién guarda tu listado</span>
										</li>
									</ul>
								</div>
								{/* Pricing Card */}
								<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
									<h3 className="mb-4 text-2xl font-semibold">
										Basic petcare+
									</h3>
									<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
										Cuida al máximo de tu mascota.
									</p>
									<div className="flex justify-center items-baseline my-8">
										<span className="mr-2 text-5xl font-extrabold">89 €</span>
										<span className="text-gray-500 dark:text-gray-400">
											/ año
										</span>
									</div>
									<a
										href="#"
										className="mb-8 text-orange-400 border-orange-400 border bg-white hover:bg-orange-400 transition hover:text-white focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
									>
										Empiece su prueba gratuita ( <small>14 días</small> )
									</a>
									{/* List */}
									<ul role="list" className="mb-8 space-y-4 text-left">
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Cuidado ilimitado de mascotas y del hogar de cuidadores
												verificados sin costo adicional.
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div
					className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
					id="dashboard"
					role="tabpanel"
					aria-labelledby="dashboard-tab"
				>
					<section className="bg-white dark:bg-gray-900">
						<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
							<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-3 xl:gap-8 lg:space-y-0">
								{/* Pricing Card */}
								<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
									<h3 className="mb-4 text-2xl font-semibold">
										Premium petcare+
									</h3>
									<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
										Da el salto a una suscripción premium.
									</p>
									<div className="flex justify-center items-baseline my-8">
										<span className="mr-2 text-5xl font-extrabold">279 €</span>
										<span className="text-gray-500 dark:text-gray-400">
											/ año
										</span>
									</div>
									<a
										href="#"
										className="mb-8 text-white bg-orange-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
									>
										Empiece su prueba gratuita ( <small>14 días</small> )
									</a>
									{/* List */}
									<ul role="list" className="mb-8 space-y-4 text-left">
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Cuidado ilimitado de mascotas y del hogar de cuidadores
												verificados sin costo adicional.
											</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Protección del hogar y contenidos.</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Garantía de devolución del dinero.</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Videollamadas gratuitas con veterinarios, en cualquier
												momento que necesite.
											</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Soporte dedicado para miembros</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Mejora tu listado en los resultados de búsqueda
											</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Ver quién guarda tu listado</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>2 pases globales a la sala VIP del aeropuerto</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Sentarse seguro de cancelación</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Insignia premium en tu anuncio</span>
										</li>
									</ul>
								</div>
								{/* Pricing Card */}
								<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-orange-50 rounded-lg border border-gray-300 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
									<h3 className="mb-4 text-2xl font-semibold">
										Standar petcare+
									</h3>
									<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
										Para los que quieren más visibilidad.
									</p>
									<div className="flex justify-center items-baseline my-8">
										<span className="mr-2 text-5xl font-extrabold">199 €</span>
										<span className="text-gray-500 dark:text-gray-400 ">
											/ año
										</span>
									</div>
									<a
										href="#"
										className="mb-8 text-white bg-orange-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
									>
										Empiece su prueba gratuita ( <small>14 días</small> )
									</a>
									{/* List */}
									<ul role="list" className="mb-8 space-y-4 text-left">
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Cuidado ilimitado de mascotas y del hogar de cuidadores
												verificados sin costo adicional.
											</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Protección del hogar y contenidos.</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Garantía de devolución del dinero.</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Videollamadas gratuitas con veterinarios, en cualquier
												momento que necesite.
											</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Soporte dedicado para miembros</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Mejora tu listado en los resultados de búsqueda
											</span>
										</li>
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>Ver quién guarda tu listado</span>
										</li>
									</ul>
								</div>
								{/* Pricing Card */}
								<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
									<h3 className="mb-4 text-2xl font-semibold">
										Basic petcare+
									</h3>
									<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
										Cuida al máximo de tu mascota.
									</p>
									<div className="flex justify-center items-baseline my-8">
										<span className="mr-2 text-5xl font-extrabold">109 €</span>
										<span className="text-gray-500 dark:text-gray-400">
											/ año
										</span>
									</div>
									<a
										href="#"
										className="mb-8 text-orange-400 border-orange-400 border bg-white hover:bg-orange-400 transition hover:text-white focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
									>
										Empiece su prueba gratuita ( <small>14 días</small> )
									</a>
									{/* List */}
									<ul role="list" className="mb-8 space-y-4 text-left">
										<li className="flex items-center space-x-3">
											{/* Icon */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
											<span>
												Cuidado ilimitado de mascotas y del hogar de cuidadores
												verificados sin costo adicional.
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};
