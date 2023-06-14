import HomeIcon from "@/components/Icons/HomeIcon";
import HouseMoonIcon from "@/components/Icons/HouseMoonIcon";
import PawWalkIcon from "@/components/Icons/PawWalkIcon";
import SunIcon from "@/components/Icons/SunIcon";
import { getToken, postNewService } from "@/controllers/userController";
import { getUserData } from "@/lib/userData";
import { Textarea } from "flowbite-react";
import { useEffect, useState } from "react";

export default function NewService() {
	const [user, setUser] = useState<any>();
	const [token, setToken] = useState<string | null>(null);
	const [newService, setNewService] = useState<boolean | null>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const tokenls = getToken();

			if (tokenls) {
				setToken(tokenls);
				const data = getUserData(tokenls);
				setUser(data);
			}
		}
	}, []);

	const handleNewService = (e: any) => {
		e.preventDefault();

		postNewService(e, user.id).then((res: any) => {
			e.target.reset(); // Eliminamos los datos del formulario y redireccionamos al usuario.
			setNewService(res);

			setTimeout(() => {
				window.location.href = "/search"; //  Redirigimos al usuario.
			}, 3000);
		});

		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<section className="bg-gray-50">
			<div className="w-full grid grid-cols-1 gap-2 text-center">
				<div className="bg-white mt-2 p-4 rounded-lg shadow-sm w-1/2 mx-auto">
					{newService && (
						<div
							id="alert-border-3"
							className="flex p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
							role="alert"
						>
							<svg
								className="flex-shrink-0 w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
									clipRule="evenodd"
								/>
							</svg>
							<div className="ml-3 text-sm font-medium">
								¡Anuncio publicado correctamente! Redirigiéndote a la página de
								servicios...
							</div>
							<button
								type="button"
								className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
								data-dismiss-target="#alert-border-3"
								aria-label="Close"
							>
								<span className="sr-only">Dismiss</span>
								<svg
									aria-hidden="true"
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>
					)}

					<div className=" mb-2 bg-cover rounded-xl w-full h-auto bg-center bg-[url('https://img.freepik.com/premium-vector/seamless-colorful-pattern-with-dogs-paws-background-pet-shop-veterinary-clinic-pet-store-zoo-shelter-flat-style-design-vector-illustration_562639-773.jpg?w=2000')]">
						<h1 className="blur-0 text-4xl border text-orange-400 pt-10 pb-10 font-bold shadow-lg">
							Nuevo Anuncio
						</h1>
					</div>

					<form onSubmit={(e: any) => handleNewService(e)}>
						<div className="grid md:grid-cols-4 grid-cols-2 gap-2 w-full max-w-screen-sm mx-auto mt-4 mb-4">
							<div>
								<input
									className="hidden home-selector"
									id="larga-temporada"
									type="radio"
									name="radio"
								/>
								<label
									className="flex flex-col p-1 shadow-xl cursor-pointer items-center"
									htmlFor="larga-temporada"
								>
									<span className="text-xl font-bold mt-2 text-center items-center">
										<HomeIcon width={10} height={10}></HomeIcon>
									</span>
									<span className="pt-6 text-xs font-semibold uppercase">
										Larga Estancia
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
									className="flex flex-col p-1 shadow-xl cursor-pointer items-center"
									htmlFor="corta-temporada"
								>
									<span className="text-xl font-bold mt-2 text-center items-center">
										<HouseMoonIcon width={10} height={10}></HouseMoonIcon>
									</span>
									<span className="pt-6 text-xs font-semibold uppercase">
										Corta Estancia
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
									className="flex flex-col p-1 shadow-xl cursor-pointer items-center"
									htmlFor="paseos"
								>
									<span className="text-xl font-bold mt-2 text-center items-center">
										<PawWalkIcon width={10} height={10}></PawWalkIcon>
									</span>
									<span className="pt-6 text-xs font-semibold uppercase">
										Paseos
									</span>
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
									className="flex flex-col p-1 shadow-xl cursor-pointer items-center"
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

						<div className="mb-6">
							<label
								htmlFor="name"
								className="flex flex-col p-1 shadow-xl cursor-pointer items-center"
							>
								¿No aparece el servicio que quieres ofrecer?
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light"
								placeholder="Veterinaria"
								required={false}
								disabled={newService !== null ? true : false}
							/>
						</div>

						<div className="mb-6">
							<label
								htmlFor="name"
								className="flex flex-col p-1 shadow-xl cursor-pointer items-center"
							>
								Nombre del servicio
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light"
								placeholder="Peluqueria Canina en Alicante"
								required={true}
								disabled={newService !== null ? true : false}
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="description"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Descripción
							</label>

							<Textarea
								id="description"
								placeholder="Descripción del servicio."
								disabled={newService as boolean}
								required
								name="description"
								rows={4}
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="price"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Precio / hora (€)
							</label>
							<input
								name="price"
								disabled={newService as boolean}
								type="number"
								id="price"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light"
								required={true}
							/>
							<p
								id="helper-text-explanation"
								className="mt-2 text-sm text-gray-500 dark:text-gray-400"
							>
								Por favor, visita nuestro listado de{" "}
								<a
									href="/search"
									className="font-medium text-orange-400 hover:underline dark:text-orange-400"
								>
									servicios{" "}
								</a>
								antes de publicar un anuncio.
							</p>
						</div>
						<div className="flex items-start mb-6">
							<div className="flex items-center h-5">
								<input
									id="terms"
									type="checkbox"
									defaultValue=""
									className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
									required={true}
								/>
							</div>
							<label
								htmlFor="terms"
								className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Acepto los{" "}
								<a
									href="#"
									className="text-orange-600 hover:underline dark:text-orange-500"
								>
									términos y condiciones al publicar este anuncio.
								</a>
							</label>
						</div>

						{newService ? (
							<button
								disabled={true}
								type="button"
								className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 inline-flex items-center"
							>
								<svg
									aria-hidden="true"
									role="status"
									className="inline w-4 h-4 mr-3 text-white animate-spin"
									viewBox="0 0 100 101"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
										fill="#E5E7EB"
									/>
									<path
										d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
										fill="currentColor"
									/>
								</svg>
								Publicando anuncio...
							</button>
						) : (
							<button
								type="submit"
								className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
							>
								Publicar anuncio
							</button>
						)}
					</form>
				</div>
			</div>
		</section>
	);
}
