import Image from "next/image";

export default function Custom404() {
	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="mx-auto max-w-screen-sm text-center">
						<Image
							src="https://img1.picmix.com/output/stamp/normal/8/5/8/3/883858_534a6.gif"
							className="mx-auto"
							width={300}
							height={300}
							alt="404"
						/>
						<h1 className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 inline-block text-transparent bg-clip-text text-9xl font-extrabold">
							404
						</h1>
						<p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
							¡Guau! Parece que te has perdido...
						</p>
						<p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
							No te preocupes por nada, aún puedes volver al sitio web y seguir
							navegando por las secciones existentes. De mientras, nuestros
							ingenieros construirán esta página.{" "}
						</p>
						<a
							href="/"
							className="inline-flex text-orange-400 bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
						>
							{"<"} Volver al Inicio
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
