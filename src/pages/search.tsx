import { getServices } from "@/controllers/serviceController";
import { getUser } from "@/controllers/userController";
import { Button, Label, Radio, Select, TextInput } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NewService() {
	const [services, setServices] = useState([]);

	useEffect(() => {
		getServices().then((data: any) => {
			setServices(data);
		});
	}, []);

	return (
		<section className="bg-gray-50">
			<div className="w-full grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-2 text-center">
				<div className="bg-white mt-2 p-4 rounded-lg shadow-sm">
					<div id="select">
						<div className="mb-2 block">
							<Label htmlFor="services" value="Selecciona un servicio" />
						</div>
						<Select id="services" required>
							<option>Larga estancia</option>
							<option>Corta estancia</option>
							<option>Paseos</option>
							<option>Guarderías</option>
						</Select>
					</div>

					{/* LOCATION INPUT */}

					<div>
						<div className="mb-2 block">
							<Label htmlFor="base" value="¿Dónde buscas este servicio?" />
						</div>
						<TextInput
							id="base"
							sizing="md"
							type="text"
							placeholder="Almoradí, Alicante"
						/>
					</div>

					{/* PET SELECTOR */}

					<fieldset className="flex flex-row gap-4 mt-4" id="radio">
						<Label htmlFor="radio" value="Tu amigo peludo es..." />
						<div className="flex items-center gap-2">
							<Radio defaultChecked id="perro" name="pets" value="perro" />
							<Label htmlFor="perro">Perro</Label>
						</div>
						<div className="flex items-center gap-2">
							<Radio id="gato" name="pets" value="gato" />
							<Label htmlFor="gato">Gato</Label>
						</div>
					</fieldset>

					<div
						date-rangepicker=""
						datepicker-format="dd/mm/yyyy"
						className="justify-center mt-5 gap-8 block md:flex"
					>
						<div>
							<span className="mx-4">Desde...</span>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg
										aria-hidden="true"
										className="w-5 h-5 text-gray-500 dark:text-gray-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<input
									name="start"
									type="text"
									className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
									placeholder="Fecha de inicio"
								/>
							</div>
						</div>
						<div>
							<span className="mx-4 ">Hasta...</span>
							<div className="relative">
								<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
									<svg
										aria-hidden="true"
										className="w-5 h-5 text-gray-500 dark:text-gray-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<input
									name="end"
									type="text"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
									placeholder="Fecha de fin"
								/>
							</div>
						</div>
					</div>

					<Button className="w-full mt-4 bg-orange-400 text-white hover:bg-orange-500">
						Buscar
					</Button>
				</div>
				<div className="bg-white mt-2 p-4 rounded-lg shadow-sm text-left overflow-auto">
					<div>
						<div className="flow-root">
							<ul className="divide-y divide-gray-200 dark:divide-gray-700">
								{services &&
									services.map((service: any) => {
										let userData = {
											name: "",
										};

										getUser(service.user).then((user: any) => {
											userData.name = user.name;
											console.log(userData.name);
										});

										return (
											<li key={service.id} className="py-3 sm:py-4 hover:cursor-pointer hover:border-l-4 hover:border-orange-500">
												<div className="flex items-center space-x-4">
													<div className="shrink-0">
														<Image
															alt="Neil image"
															className="rounded-full cover w-ful h-full"
															height="90"
															src={`/images/profile-picture.webp`}
															width="90"
														/>
													</div>
													<div className="min-w-0 flex-1">
														<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
															{userData.name}
														</p>
														<p className="truncate text-xl text-gray-500 dark:text-gray-700">
															{service.name}
														</p>
														<p className="truncate text-sm text-gray-500 dark:text-gray-400">
															{service.description}
														</p>
													</div>
													<div className="inline-flex items-center font-extrabold text-2xl text-orange-400 dark:text-white">
														{service.price} €
														<small className="text-gray-400 text-sm font-light">
															{"  "}
															/ hora
														</small>
													</div>
												</div>
											</li>
										);
									})}

								{services.length == 0 ? (
									<div className="flex items-center justify-center w-56 h-56 mx-auto">
										<div role="status">
											<svg
												aria-hidden="true"
												className="w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600"
												viewBox="0 0 100 101"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
													fill="currentColor"
												/>
												<path
													d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
													fill="currentFill"
												/>
											</svg>
											<span className="sr-only">Loading...</span>
										</div>
									</div>
								) : (
									""
								)}

								{/* <li className="py-3 sm:py-4 hover:cursor-pointer hover:border-l-4 hover:border-orange-500">
									<div className="flex items-center space-x-4">
										<div className="shrink-0">
											<Image
												alt="Bonnie image"
												className="rounded-full"
												height="90"
												src="/images/profile-picture.webp"
												width="90"
											/>
										</div>
										<div className="min-w-0 flex-1">
											<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
												Bonnie Green
											</p>
											<p className="truncate text-sm text-gray-500 dark:text-gray-400">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Quo est, molestias repellendus minima hic, quos,
												suscipit maxime modi vero excepturi beatae natus. Quos,
												expedita. Magnam distinctio maxime quod consequuntur
												quidem.
											</p>
										</div>
										<div className="inline-flex items-center font-extrabold text-2xl text-orange-400 dark:text-white">
											758€
										</div>
									</div>
								</li>
								<li className="py-3 sm:py-4 hover:cursor-pointer hover:border-l-4 hover:border-orange-500">
									<div className="flex items-center space-x-4">
										<div className="shrink-0">
											<Image
												alt="Michael image"
												className="rounded-full"
												height="90"
												src="/images/profile-picture.webp"
												width="90"
											/>
										</div>
										<div className="min-w-0 flex-1">
											<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
												Michael Gough
											</p>
											<p className="truncate text-sm text-gray-500 dark:text-gray-400">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Quo est, molestias repellendus minima hic, quos,
												suscipit maxime modi vero excepturi beatae natus. Quos,
												expedita. Magnam distinctio maxime quod consequuntur
												quidem.
											</p>
										</div>
										<div className="inline-flex items-center font-extrabold text-2xl text-orange-400 dark:text-white">
											84€
										</div>
									</div>
								</li>
								<li className="py-3 sm:py-4 hover:cursor-pointer hover:border-l-4 hover:border-orange-500">
									<div className="flex items-center space-x-4">
										<div className="shrink-0">
											<Image
												alt="Lana image"
												className="rounded-full"
												height="90"
												src="/images/profile-picture.webp"
												width="90"
											/>
										</div>
										<div className="min-w-0 flex-1">
											<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
												Lana Byrd
											</p>
											<p className="truncate text-sm text-gray-500 dark:text-gray-400">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Quo est, molestias repellendus minima hic, quos,
												suscipit maxime modi vero excepturi beatae natus. Quos,
												expedita. Magnam distinctio maxime quod consequuntur
												quidem.
											</p>
										</div>
										<div className="inline-flex items-center font-extrabold text-2xl text-orange-400 dark:text-white">
											984€
										</div>
									</div>
								</li>
								<li className="py-3 sm:py-4 hover:cursor-pointer hover:border-l-4 hover:border-orange-500">
									<div className="flex items-center space-x-4">
										<div className="shrink-0">
											<Image
												alt="Thomas image"
												className="rounded-full"
												height="90"
												src="/images/profile-picture.webp"
												width="90"
											/>
										</div>
										<div className="min-w-0 flex-1">
											<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
												Thomes Lean
											</p>
											<p className="truncate text-sm text-gray-500 dark:text-gray-400">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Quo est, molestias repellendus minima hic, quos,
												suscipit maxime modi vero excepturi beatae natus. Quos,
												expedita. Magnam distinctio maxime quod consequuntur
												quidem.
											</p>
										</div>
										<div className="inline-flex items-center font-extrabold text-2xl text-orange-400 dark:text-white">
											848€
										</div>
									</div>
								</li> */}
							</ul>
							<div className="text-center">
								{/* <Pagination
									currentPage={1}
									onPageChange={() => {}}
									totalPages={100}
								/> */}
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white mt-2 p-4 rounded-lg shadow-sm">
					<>
						<iframe
							className="w-full h-full"
							frameBorder={0}
							scrolling="no"
							marginHeight={0}
							marginWidth={0}
							src="https://www.openstreetmap.org/export/embed.html?bbox=14.407732486724855%2C35.902312969691444%2C14.443566799163818%2C35.91805867956735&layer=mapnik"
						/>
					</>
				</div>
			</div>
		</section>
	);
}
