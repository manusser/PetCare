import { RegisterForms } from "@/components/Elements/RegisterForms";
import Image from "next/image";

export default function Register() {
	return (
		<>
			{/* Title */}
			<h1 className="text-3xl font-bold text-center mt-10">
				¡Registrate hoy! Y tú, ¿de qué lado estás? 👇
			</h1>
			<p className="text-center text-gray-500 mt-2 mb-4">
				Selecciona tu bando y comienza a disfrutar de nuestra increíble
				comunidad.
			</p>
			<RegisterForms></RegisterForms>
		</>
	);
}
