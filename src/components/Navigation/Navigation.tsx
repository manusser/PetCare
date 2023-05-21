import { Button } from "flowbite-react";
import SearchIcon from "../Icons/SearchIcon";
import HeartIcon from "../Icons/HeartIcon";
import BankNotesIcon from "../Icons/BankNotesIcon";
import MessageIcon from "../Icons/MessageIcon";
import QuestionMarkIcon from "../Icons/QuestionMark";
import Link from "next/link";
import Image from "next/image";
import { getToken, logoutUser } from "@/controllers/userController";
import { useEffect, useState } from "react";
import { getUserData } from "@/lib/userData";
import md5 from "md5";
import ChatBubbleIcon from "../Icons/ChatBubbleIcon";

export default function Navigation() {
	const [token, setToken] = useState<string | null>(null);
	const [user, setUser] = useState<any>();

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

	return (
		<>
			{/* MOBILE NAVBAR */}
			{user && (
				<div className="pt-12 sm:pt-16 lg:pt-24 md:hidden fixed bottom-0 w-full z-10 pt-50">
					<nav className="sticky bottom-0 mx-auto w-full sm:max-w-md">
						<a
							href="#"
							className="justify-center  absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center just-y-center rounded-3xl bg-orange-400 text-white shadow-lg transition duration-100 hover:bg-orange-600 sm:-top-8 sm:h-16 sm:w-16"
						>
							<svg
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								className="h-6 w-6 text-white"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
								></path>
							</svg>
						</a>

						<div className="flex justify-between gap-8 border-t bg-white px-10 py-4 text-xs sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl">
							<span className="flex flex-col items-center gap-1 text-orange-500">
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
									<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
								</svg>

								<span>Inicio</span>
							</span>

							<a
								href="#"
								className="mr-4 flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600 sm:mr-8"
							>
								<MessageIcon width="6" height="6"></MessageIcon>

								<span>Mensajes</span>
							</a>

							<a
								href="#"
								className="ml-4 flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600 sm:ml-8"
							>
								<SearchIcon width="6" height="6"></SearchIcon>

								<span>Buscar</span>
							</a>

							<a
								href="#"
								className="flex flex-col items-center gap-1 text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
							>
								<QuestionMarkIcon></QuestionMarkIcon>

								<span>Ayuda</span>
							</a>
						</div>
					</nav>
				</div>
			)}

			{/* PC NAVBAR */}
			<nav className="bg-white border-gray-200 shadow-lg">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<Link href="/" className="flex items-center">
						<Image
							src="/images/PetCare-Large-Logo-Web.png"
							className="h-12 mr-3"
							alt="Flowbite Logo"
							width={200}
							height={120}
						/>
					</Link>
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-default"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>

					{user && (
						<div className="flex md:order-2 gap-2 md:w-auto justify-center items-center">
							<>
								{/* Messages Icon */}
								<ChatBubbleIcon width={6} height={6}></ChatBubbleIcon>(2)
								<button
									id="dropdownUserAvatarButton"
									data-dropdown-toggle="dropdownAvatar"
									className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
									type="button"
								>
									<span className="sr-only">Open user menu</span>
									<Image
										className="w-8 h-8 rounded-full"
										src={"https://www.gravatar.com/avatar/" + md5(user.email)}
										width={32}
										height={32}
										alt="user photo"
									/>
								</button>
								{/* Dropdown menu */}
								<div
									id="dropdownAvatar"
									className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
								>
									<div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
										<div>{user.name}</div>
										<div className="font-medium truncate"> {user.email} </div>
									</div>
									<ul
										className="py-2 text-sm text-gray-700 dark:text-gray-200"
										aria-labelledby="dropdownUserAvatarButton"
									>
										<li>
											<a
												href="#"
												className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Mi panel
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Ajustes
											</a>
										</li>
										<li>
											<a
												href="#"
												className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
											>
												Mensajes{" "}
												<span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-white bg-orange-400 rounded-full">
													2
												</span>
											</a>
										</li>
									</ul>
									<div className="py-2">
										<a
											href="#"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
											onClick={() => logoutUser()}
										>
											Log out
										</a>
									</div>
								</div>
								<Button className="bg-orange-400 hover:bg-orange-500 text-white border-2 border-orange-400 hidden md:block">
									<span className="text-white">Nuevo Anuncio</span>{" "}
								</Button>
							</>
						</div>
					)}

					{!user && (
						<div className="hidden md:flex md:order-2 md:w-auto gap-2">
							<Link href="/login">
								<Button className="bg-white hover:bg-gray-100 border-2 border-orange-400">
									<span className="text-orange-400">Inicia Sesión</span>{" "}
								</Button>
							</Link>
							<Link href="/register">
								<Button className="bg-orange-400 shadow-lg hover:bg-orange-300 text-white rounded-full">
									<span className="text-white">Regístrate</span>{" "}
								</Button>
							</Link>
						</div>
					)}
					<div className="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  dark:border-gray-700">
							<li>
								<Link
									href="/"
									className="flex py-2 pl-2 gap-2 pr-4 hover:bg-gray-100 md:hover:bg-transparent text-black rounded md:hover:text-orange-400 md:bg-transparent md:p-0 dark:text-white md:dark:orange-blue-500"
									aria-current="page"
								>
									<SearchIcon width="6" height="6"></SearchIcon> Busca
									cuidadores
								</Link>
							</li>
							<li>
								<Link
									href="/become-a-sitter"
									className="flex gap-2 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									<HeartIcon width="6" height="6"></HeartIcon> Conviértete en un
									cuidador
								</Link>
							</li>
							<li>
								<Link
									href="/petcare-plus"
									className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 flex gap-2 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-bold md:p-0 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									<BankNotesIcon
										width="6"
										height="6"
										color="black"
									></BankNotesIcon>{" "}
									Sé un petcare+
								</Link>
							</li>

							{user && (
								<div className="block pt-4 md:hidden">
									<li>
										<Link
											href="/login"
											className="bg-orange-400 text-white flex gap-2 py-2 pl-3 pr-4  rounded hover:bg-orange-500 md:hover:bg-transparent md:border-0  md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
										>
											Nuevo Anuncio
										</Link>
									</li>
								</div>
							)}

							{!user && (
								<div className="block pt-4 md:hidden">
									<li>
										<Link
											href="/login"
											className="flex gap-2 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
										>
											Inicia Sesión
										</Link>
									</li>
									<li>
										<Link
											href="/register"
											className="flex gap-2 py-2 pl-3 pr-4 text-orange-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
										>
											Regístrate
										</Link>
									</li>
								</div>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
