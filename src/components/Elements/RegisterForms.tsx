export const RegisterForms = () => {
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
							className="inline-block active:font-bold enabled:text-black p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
							id="profile-tab"
							data-tabs-target="#profile"
							type="button"
							role="tab"
							aria-controls="profile"
							aria-selected="false"
						>
							Soy Propietario 🐕
						</button>
					</li>
					<li className="mr-2" role="presentation">
						<button
							className="inline-block active:font-bold p-4 enabled:text-black border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
							id="dashboard-tab"
							data-tabs-target="#dashboard"
							type="button"
							role="tab"
							aria-controls="dashboard"
							aria-selected="false"
						>
							Soy Cuidador 🐶💰
						</button>
					</li>
				</ul>
			</div>
			<div id="myTabContent">
				<div
					className="hidden p-4 rounded-lg"
					id="profile"
					role="tabpanel"
					aria-labelledby="profile-tab"
				>
					<div className="py-8 sm:py-8 lg:py-8">
						<div className="mx-auto max-w-screen-2xl max-h-min px-4 md:px-8">
							<section className="bg-white shadow-xl rounded-lg">
								<div className="lg:grid lg:h-2/3 lg:grid-cols-12">
									<section className="relative flex h-18 items-end bg-gray-900 lg:col-span-5 lg:max-h-fit xl:col-span-6">
										<img
											alt="Night"
											src="/images/front-view-cute-dog-eating-bone.jpg"
											className="absolute inset-0 h-full w-full object-cover opacity-80"
										/>
									</section>
									<main
										aria-label="Main"
										className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
									>
										<div className="max-w-xl lg:max-w-3xl">
											<div className="relative -mt-16 block lg:hidden">
												<h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
													¡Bienvenid@ a petcare! 🐕‍🦺
												</h1>
												<p className="mt-4 leading-relaxed text-gray-500">
													Regístrate y únete a la mayor comunidad de cuidadores
													de mascotas de toda España.
												</p>
											</div>
											<h2 className="mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
												Regístrate como Propietario 🐕
											</h2>
											<p className="mt-4 leading-relaxed text-gray-500">
												Encuentra cuidadores cerca de ti y deja a tu mascota en
												buenas manos.
											</p>
											<form action="#" className="mt-8 grid grid-cols-6 gap-6">
												<div className="col-span-6 sm:col-span-3">
													<label
														htmlFor="NombreCompleto"
														className="block text-sm font-medium text-gray-700"
													>
														Nombre completo
													</label>
													<input
														type="text"
														id="FirstName"
														name="first_name"
														className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
													/>
												</div>
												<div className="col-span-6 sm:col-span-3">
													<label
														htmlFor="LastName"
														className="block text-sm font-medium text-gray-700"
													>
														Número de teléfono
													</label>
													<input
														type="tel"
														id="numeroTelefono"
														name="numeroTelefono"
														className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
													/>
												</div>
												<div className="col-span-6">
													<label
														htmlFor="Email"
														className="block text-sm font-medium text-gray-700"
													>
														Email
													</label>
													<input
														type="email"
														id="Email"
														name="email"
														className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
													/>
												</div>
												<div className="col-span-6 sm:col-span-3">
													<label
														htmlFor="Password"
														className="block text-sm font-medium text-gray-700"
													>
														Contraseña
													</label>
													<input
														type="password"
														id="Password"
														name="password"
														className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
													/>
												</div>
												<div className="col-span-6 sm:col-span-3">
													<label
														htmlFor="PasswordConfirmation"
														className="block text-sm font-medium text-gray-700"
													>
														Confirmar contraseña
													</label>
													<input
														type="password"
														id="PasswordConfirmation"
														name="password_confirmation"
														className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
													/>
												</div>
												<div className="col-span-6">
													<label
														htmlFor="MarketingAccept"
														className="flex gap-4"
													>
														<input
															type="checkbox"
															id="MarketingAccept"
															name="marketing_accept"
															className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
														/>
														<span className="text-sm text-gray-700">
															Deseo recibir información sobre promociones y
															ofertas de petcare.
														</span>
													</label>
												</div>
												<div className="col-span-6">
													<p className="text-sm text-gray-500">
														Al crear una cuenta, aceptas nuestros{" "}
														<a href="#" className="text-gray-700 underline">
															términos y condiciones{" "}
														</a>
														y nuestra{" "}
														<a href="#" className="text-gray-700 underline">
															política de privacidad.
														</a>
														.
													</p>
												</div>
												<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
													<button className="inline-block shrink-0 rounded-md border bg-orange-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-400 focus:outline-none focus:ring active:text-orange-500">
														Crear cuenta
													</button>
													<p className="mt-4 text-sm text-gray-500 sm:mt-0">
														¿Ya tienes una cuenta?{" "}
														<a href="#" className="text-gray-700 underline">
															Inicia Sesión
														</a>
														.
													</p>
												</div>
											</form>
										</div>
									</main>
								</div>
							</section>
						</div>
					</div>
				</div>
				<div
					className="hidden p-4 rounded-lg"
					id="dashboard"
					role="tabpanel"
					aria-labelledby="dashboard-tab"
				>
					<div className="py-8 sm:py-8 lg:py-8">
						<div className="mx-auto max-w-screen-2xl max-h-min px-4 md:px-8">
							<section className="bg-white shadow-xl rounded-lg">
								<div className="lg:grid lg:h-2/3 lg:grid-cols-12">
									<section className="relative flex h-18 items-end bg-gray-900 lg:col-span-5 lg:max-h-fit xl:col-span-6">
										<img
											alt="Night"
											src="/images/washing-pet-dog-home.jpg"
											className="absolute inset-0 h-full w-full object-cover opacity-80"
										/>
									</section>
									<main
										aria-label="Main"
										className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
									>
										<div className="max-w-xl lg:max-w-3xl">
											<h2 className="mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
												Regístrate como Cuidador 🐕
											</h2>
											<p className="mt-4 leading-relaxed text-gray-500">
												Obtén ingresos haciendo lo que más te gusta 💸
											</p>
											<form action="#" className="mt-8 grid grid-cols-6 gap-6">
												<div className="col-span-6 sm:col-span-3">
													<label
														htmlFor="NombreCompleto"
														className="block text-sm font-medium text-gray-700"
													>
														Nombre completo
													</label>
													<input
														type="text"
														id="FirstName"
														name="first_name"
														className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
													/>
												</div>
												<div className="col-span-6 sm:col-span-3">
													<label
														htmlFor="LastName"
														className="block text-sm font-medium text-gray-700"
													>
														Número de teléfono
													</label>
													<input
														type="tel"
														id="numeroTelefono"
														name="numeroTelefono"
														className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
													/>
												</div>
												<div className="col-span-6">
													<label
														htmlFor="Email"
														className="block text-sm font-medium text-gray-700"
													>
														Email
													</label>
													<input
														type="email"
														id="Email"
														name="email"
														className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
													/>
												</div>
												<div className="col-span-6 sm:col-span-3">
													<label
														htmlFor="Password"
														className="block text-sm font-medium text-gray-700"
													>
														Contraseña
													</label>
													<input
														type="password"
														id="Password"
														name="password"
														className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
													/>
												</div>
												<div className="col-span-6 sm:col-span-3">
													<label
														htmlFor="PasswordConfirmation"
														className="block text-sm font-medium text-gray-700"
													>
														Confirmar contraseña
													</label>
													<input
														type="password"
														id="PasswordConfirmation"
														name="password_confirmation"
														className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
													/>
												</div>
												<div className="col-span-6">
													<label
														htmlFor="MarketingAccept"
														className="flex gap-4"
													>
														<input
															type="checkbox"
															id="MarketingAccept"
															name="marketing_accept"
															className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
														/>
														<span className="text-sm text-gray-700">
															Deseo recibir información sobre promociones y
															ofertas de petcare.
														</span>
													</label>
												</div>
												<div className="col-span-6">
													<p className="text-sm text-gray-500">
														Al crear una cuenta, aceptas nuestros{" "}
														<a href="#" className="text-gray-700 underline">
															términos y condiciones{" "}
														</a>
														y nuestra{" "}
														<a href="#" className="text-gray-700 underline">
															política de privacidad.
														</a>
														.
													</p>
												</div>
												<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
													<button className="inline-block shrink-0 rounded-md border bg-orange-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-400 focus:outline-none focus:ring active:text-orange-500">
														Crear cuenta
													</button>
													<p className="mt-4 text-sm text-gray-500 sm:mt-0">
														¿Ya tienes una cuenta?{" "}
														<a href="#" className="text-gray-700 underline">
															Inicia Sesión
														</a>
														.
													</p>
												</div>
											</form>
										</div>
									</main>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
