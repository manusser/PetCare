import { RegisterForms } from "@/components/Elements/RegisterForms";
import Image from "next/image";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Register() {
	// Check if user is authenticated
	// const router = useRouter();

	// useEffect(() => {
	// 	if (isAuthenticated()) {
	// 		router.push("/");
	// 	}
	// }, []);

	return (
		<>
			{/* Title */}
			<h1 className="text-3xl font-bold text-center mt-10">
				¡Únete a la mayor comunidad de cuidadores! 👇
			</h1>
			<p className="text-center text-gray-500 mt-2 mb-4">
				¿Buscas cuidadores? O... ¿quieres anunciarte? ¡Regístrate!
			</p>
			<RegisterForms></RegisterForms>
		</>
	);
}
