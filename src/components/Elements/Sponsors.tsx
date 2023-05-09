import Image from "next/image";

export default function Sponsors() {
	return (
		<div className="bg-white py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
					¡Oye! Salimos en estos sitios tan chulos 👋
				</h2>
				<div className="grid grid-cols-2 gap-6 rounded-lg bg-gray-100 p-6 sm:h-40 sm:content-evenly md:grid-cols-4">
					{/* logo - start */}
					<div className="flex justify-center text-gray-400">
						<Image
							src="/images/logos/elmundo.svg"
							width={100}
							height={100}
							alt="El Mundo Logo"
						></Image>
					</div>
					{/* logo - end */}
					{/* logo - start */}
					<div className="flex justify-center text-gray-400">
						<Image
							src="/images/logos/el-pais.svg"
							width={150}
							height={100}
							alt="El Mundo Logo"
						></Image>
					</div>
					{/* logo - end */}
					{/* logo - start */}
					<div className="flex justify-center text-gray-400">
						<Image
							src="/images/logos/logo-ABC.svg"
							width={100}
							height={100}
							alt="El Mundo Logo"
						></Image>
					</div>
					{/* logo - end */}
					{/* logo - start */}
					<div className="flex justify-center text-gray-400">
						<Image
							src="/images/logos/logo-informacion.svg"
							width={100}
							height={100}
							alt="El Mundo Logo"
						></Image>
					</div>
					{/* logo - end */}
				</div>
			</div>
		</div>
	);
}
