import { useState } from "react";
import { registerUser } from "@/controllers/userController";
import Link from "next/link";

export const RegisterForms = () => {
	const [register, setRegister] = useState<{} | null>(null);

	const [errors, setErrors] = useState([]);

	const handleRegister = (e: any) => {
		e.preventDefault();

		registerUser(e)
			.then((res: any) => {
				setRegister(res);

				e.target.reset(); // Eliminamos los datos del formulario y redireccionamos al usuario.
				setErrors([]);
				setTimeout(() => {
					window.location.href = "/login"; //  Redirigimos al usuario.
				}, 3000);
			})
			.catch((data) => {
				setErrors(data.errors);
				console.log(errors);
			});
	};

	return (
		<>
			<div id="myTabContent">
				<div
					className="p-4 rounded-lg"
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
											{register && (
												<div
													className="flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
													role="alert"
												>
													<svg
														aria-hidden="true"
														className="flex-shrink-0 inline w-5 h-5 mr-3"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fill-rule="evenodd"
															d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
															clip-rule="evenodd"
														></path>
													</svg>
													<span className="sr-only">Info</span>
													<div>
														<span className="font-medium">
															¡Registrado correctamente!
														</span>{" "}
														Redirigiéndote a la página de login... <br />
														<small>
															Si no te redirige, haz click{" "}
															<Link href={"/login"}>aquí</Link>.
														</small>
													</div>
												</div>
											)}

											<h2 className="mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
												Regístrate hoy 🐕
											</h2>

											<p className="mt-4 leading-relaxed text-gray-500">
												Encuentra cuidadores cerca de ti y deja a tu mascota en
												buenas manos.
											</p>
											<form
												action="#"
												className="mt-8 grid grid-cols-6 gap-6"
												onSubmit={(e) => {
													handleRegister(e);
												}}
											>
												<div className="col-span-6">
													<label
														htmlFor="NombreCompleto"
														className="block text-sm font-medium text-gray-700"
													>
														Nombre completo
													</label>
													<input
														type="text"
														id="FirstName"
														name="name"
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
											<div
												className="mt-4 p-4 mb-4 text-sm rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-blue-400"
												role="alert"
											>
												{errors && errors.length > 0 && (
													<>
														<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
															Requisitos del registro:
														</h2>
														<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
															<li className="flex items-center">
																{errors.filter(
																	(error: any) =>
																		error.field === "fill_fields_message"
																).length > 0 ? (
																	<>
																		<svg
																			className="w-4 h-4 mr-1.5 text-red-500 flex-shrink-0"
																			fill="currentColor"
																			viewBox="0 0 20 20"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				fill-rule="evenodd"
																				d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
																				clip-rule="evenodd"
																			></path>
																		</svg>
																	</>
																) : (
																	<svg
																		className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
																		fill="currentColor"
																		viewBox="0 0 20 20"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			fill-rule="evenodd"
																			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																			clip-rule="evenodd"
																		></path>
																	</svg>
																)}
																Rellene todos los campos.
															</li>
															<li className="flex items-center">
																{errors.filter(
																	(error: any) =>
																		error.field === "password_length_message"
																).length > 0 ? (
																	<>
																		<svg
																			className="w-4 h-4 mr-1.5 text-red-500 flex-shrink-0"
																			fill="currentColor"
																			viewBox="0 0 20 20"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				fill-rule="evenodd"
																				d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
																				clip-rule="evenodd"
																			></path>
																		</svg>
																	</>
																) : (
																	<svg
																		className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
																		fill="currentColor"
																		viewBox="0 0 20 20"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			fill-rule="evenodd"
																			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																			clip-rule="evenodd"
																		></path>
																	</svg>
																)}
																La contraseña debe tener mínimo 8 carácteres.
															</li>
															<li className="flex items-center">
																{errors.filter(
																	(error: any) =>
																		error.field === "confirm_password_message"
																).length > 0 ? (
																	<>
																		<svg
																			className="w-4 h-4 mr-1.5 text-red-500 flex-shrink-0"
																			fill="currentColor"
																			viewBox="0 0 20 20"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				fill-rule="evenodd"
																				d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
																				clip-rule="evenodd"
																			></path>
																		</svg>
																	</>
																) : (
																	<svg
																		className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
																		fill="currentColor"
																		viewBox="0 0 20 20"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			fill-rule="evenodd"
																			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																			clip-rule="evenodd"
																		></path>
																	</svg>
																)}
																Las contraseñas coinciden.
															</li>
															<li className="flex items-center">
																{errors.filter(
																	(error: any) =>
																		error.field === "email_message"
																).length > 0 ? (
																	<>
																		<svg
																			className="w-4 h-4 text-red-500 mr-1.5 flex-shrink-0"
																			fill="currentColor"
																			viewBox="0 0 20 20"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				fill-rule="evenodd"
																				d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
																				clip-rule="evenodd"
																			></path>
																		</svg>
																	</>
																) : (
																	<svg
																		className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
																		fill="currentColor"
																		viewBox="0 0 20 20"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			fill-rule="evenodd"
																			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
																			clip-rule="evenodd"
																		></path>
																	</svg>
																)}
																Correo electrónico válido.
															</li>
														</ul>
													</>
												)}
											</div>
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
