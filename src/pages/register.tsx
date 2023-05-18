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
			<RegisterForms></RegisterForms>
		</>
	);
}
