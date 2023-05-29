import {
	Button,
	Card,
	Label,
	Pagination,
	Radio,
	Select,
	TextInput,
} from "flowbite-react";
import Image from "next/image";

export default function NewService() {
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
				<div className="bg-white mt-2 p-4 rounded-lg shadow-sm text-left">
					<div>
						<div className="flow-root">
							<ul className="divide-y divide-gray-200 dark:divide-gray-700">
								<li className="py-3 sm:py-4 hover:cursor-pointer hover:border-l-4 hover:border-orange-500">
									<div className="flex items-center space-x-4">
										<div className="shrink-0">
											<Image
												alt="Neil image"
												className="rounded-full"
												height="90"
												src="/images/profile-picture.webp"
												width="90"
											/>
										</div>
										<div className="min-w-0 flex-1">
											<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
												Neil Sims
											</p>
											<p className="truncate text-sm text-gray-500 dark:text-gray-400">
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Labore provident aspernatur possimus quasi in, illo eos,
												accusantium doloremque ipsa, repudiandae consequuntur
												nesciunt voluptas porro voluptatem velit et? Quaerat,
												vel modi!
											</p>
										</div>
										<div className="inline-flex items-center font-extrabold text-2xl text-orange-400 dark:text-white">
											123€
										</div>
									</div>
								</li>
								<li className="py-3 sm:py-4 hover:cursor-pointer hover:border-l-4 hover:border-orange-500">
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
								</li>
							</ul>
							<div className="text-center">
								<Pagination
									currentPage={1}
									onPageChange={() => {}}
									totalPages={100}
								/>
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
