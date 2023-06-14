import Link from "next/link";
import HomeIcon from "../Icons/HomeIcon";
import HouseMoonIcon from "../Icons/HouseMoonIcon";
import PawWalkIcon from "../Icons/PawWalkIcon";
import SearchIcon from "../Icons/SearchIcon";
import SunIcon from "../Icons/SunIcon";

const SearchForm = () => {
	return (
		// <>
		// 	<section className="mb-4">
		// 		<p className="mb-4 mt-2 text-center text-lg text-indigo-100 sm:text-xl md:mb-2 md:mt-5">
		// 			¿Qué servicio buscas?
		// 		</p>
		// 		<ul className="grid w-auto gap-6 md:grid-cols-2">
		// 			<li>
		// 				<input
		// 					type="radio"
		// 					id="service1"
		// 					name="hosting"
		// 					defaultValue="service1"
		// 					className="hidden peer"
		// 				/>
		// 				<label
		// 					htmlFor="service1"
		// 					className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
		// 				>
		// 					<div className="block">
		// 						<div className="flex gap-2 w-full text-lg font-semibold">
		// 							Cuidado en hogar <HomeIcon></HomeIcon>
		// 						</div>
		// 						<div className="w-full">
		// 							Deja a tu mascota en un hogar verificado.
		// 						</div>
		// 					</div>
		// 				</label>
		// 			</li>
		// 			<li>
		// 				<input
		// 					type="radio"
		// 					id="service2"
		// 					name="hosting"
		// 					defaultValue="service2"
		// 					className="hidden peer"
		// 				/>
		// 				<label
		// 					htmlFor="service2"
		// 					className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
		// 				>
		// 					<div className="block">
		// 						<div className="w-full text-lg font-semibold flex gap-2">
		// 							Paseos <PawWalkIcon></PawWalkIcon>
		// 						</div>
		// 						<div className="w-full">Dale paseos a tu mascota.</div>
		// 					</div>
		// 				</label>
		// 			</li>
		// 			<li>
		// 				<input
		// 					type="radio"
		// 					id="service3"
		// 					name="hosting"
		// 					defaultValue="service3"
		// 					className="hidden peer"
		// 				/>
		// 				<label
		// 					htmlFor="service3"
		// 					className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
		// 				>
		// 					<div className="block">
		// 						<div className="w-full text-lg font-semibold flex gap-2">
		// 							Cuida casas <HouseMoonIcon></HouseMoonIcon>
		// 						</div>
		// 						<div className="w-full">
		// 							Alguien irá a tu hogar a cuidar de el/ella.
		// 						</div>
		// 					</div>
		// 				</label>
		// 			</li>
		// 			<li>
		// 				<input
		// 					type="radio"
		// 					id="service4"
		// 					name="hosting"
		// 					defaultValue="service4"
		// 					className="hidden peer"
		// 				/>
		// 				<label
		// 					htmlFor="service4"
		// 					className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-orange-500 peer-checked:border-orange-600 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
		// 				>
		// 					<div className="block">
		// 						<div className="w-full text-lg font-semibold flex gap-2">
		// 							Guarderías <SunIcon></SunIcon>
		// 						</div>
		// 						<div className="w-full">
		// 							Cuidan de tu mascota una larga temporada.
		// 						</div>
		// 					</div>
		// 				</label>
		// 			</li>
		// 		</ul>
		// 	</section>
		// </>

		<>
			<div className="grid md:grid-cols-4 grid-cols-2 gap-2 w-full max-w-screen-sm">
				<div>
					<input
						className="hidden home-selector"
						id="larga-temporada"
						type="radio"
						name="radio"
					/>
					<label
						className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer items-center"
						htmlFor="larga-temporada"
					>
						<span className="text-xl font-bold mt-2 text-center items-center">
							<HomeIcon width={10} height={10}></HomeIcon>
						</span>
						<span className="pt-6 text-xs font-semibold uppercase">
							Tengo un viaje
						</span>
					</label>
				</div>
				<div>
					<input
						className="hidden home-selector"
						id="corta-temporada"
						type="radio"
						name="radio"
					/>
					<label
						className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer items-center"
						htmlFor="corta-temporada"
					>
						<span className="text-xl font-bold mt-2 text-center items-center">
							<HouseMoonIcon width={10} height={10}></HouseMoonIcon>
						</span>
						<span className="pt-6 text-xs font-semibold uppercase">
							Corta temporada
						</span>
					</label>
				</div>
				<div>
					<input
						className="hidden home-selector"
						id="paseos"
						type="radio"
						name="radio"
					/>
					<label
						className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer items-center"
						htmlFor="paseos"
					>
						<span className="text-xl font-bold mt-2 text-center items-center">
							<PawWalkIcon width={10} height={10}></PawWalkIcon>
						</span>
						<span className="pt-6 text-xs font-semibold uppercase">Paseos</span>
					</label>
				</div>
				<div>
					<input
						className="hidden home-selector"
						id="guarderias"
						type="radio"
						name="radio"
					/>
					<label
						className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer items-center"
						htmlFor="guarderias"
					>
						<span className="text-xl font-bold mt-2 text-center items-center">
							<SunIcon width={10} height={10}></SunIcon>
						</span>
						<span className="pt-6 text-xs font-semibold uppercase">
							Guarderías
						</span>
					</label>
				</div>
			</div>

			<div className="grid gap-3 md:grid-cols-2">
				{/* INPUT LOCATION */}
				<div>
					<p className="mb-4 mt-2 text-center text-lg text-indigo-100 sm:text-xl md:mb-2 md:mt-5">
						¿Dónde buscas estos servicios?
					</p>
					<div className="relative w-full">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<SearchIcon></SearchIcon>
						</div>
						<input
							type="text"
							id="email-address-icon"
							className="rounded-lg text-center text-xl bg-gray-50 border border-gray-300 text-gray-900 focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
							placeholder="Almoradí, Alicante"
						/>
					</div>
				</div>

				<div>
					{/* PET SELECTION */}
					<p className="mb-4 mt-2 text-center text-lg text-indigo-100 sm:text-xl md:mb-2 md:mt-5">
						Mi amigo peludo es...
					</p>

					<section className="flex w-full justify-center">
						<div
							className="grid w-[20rem] grid-cols-2 space-x-2 rounded-xl bg-white p-1"
							x-data="app"
						>
							<div>
								<input
									type="radio"
									name="option"
									id="1"
									className="peer hidden"
									defaultChecked={true}
								/>
								<label
									htmlFor="1"
									className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-orange-400 peer-checked:font-bold peer-checked:text-white"
								>
									Perro
								</label>
							</div>
							<div>
								<input
									type="radio"
									name="option"
									id="2"
									className="peer hidden"
								/>
								<label
									htmlFor="2"
									className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-orange-400 peer-checked:font-bold peer-checked:text-white"
								>
									Gato
								</label>
							</div>
						</div>
					</section>
				</div>
			</div>

			{/* DATE SELECTION */}
			<div
				date-rangepicker=""
				datepicker-format="dd/mm/yyyy"
				className="justify-center mt-5 gap-8 block md:flex"
			>
				<div>
					<span className="mx-4 text-indigo-100">Desde...</span>
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
					<span className="mx-4 text-indigo-100">Hasta...</span>
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

			<div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center mt-5 md:mt-10">
				<Link
					href="/search"
					className="flex gap-2 rounded-lg bg-orange-400 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-orange-500 focus-visible:ring active:bg-orange-700 md:text-base"
				>
					<SearchIcon width="6" height="6" color="white"></SearchIcon> Buscar
				</Link>
			</div>
		</>
	);
};

export default SearchForm;
