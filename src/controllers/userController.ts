import isAuthenticated from "@/lib/isAuthenticated";
import axios from "axios";

const API_URL = process.env.API_URL;

export const registerUser = async (e: any) => {
	e.preventDefault();

	return new Promise(async (resolve, reject) => {
		// Obtenemos datos del formulario
		const form = new FormData(e.target);
		const { name, email, password, password_confirmation } =
			Object.fromEntries(form);

		await axios
			.post(`${API_URL}/api/users/register`, {
				name: name,
				email: email,
				password: password,
				password_confirmation: password_confirmation,
			})
			.then((response) => {
				resolve(response.data);
				// console.log(response.data);
			})
			.catch((error) => {
				reject(error.response.data);
			});
	});
};

export const loginUser = async (e: any) => {
	e.preventDefault();

	return new Promise(async (resolve, reject) => {
		// Obtenemos datos del formulario
		const form = new FormData(e.target);
		const { email, password } = Object.fromEntries(form);

		await axios
			.post(`${API_URL}/api/users/login`, {
				email: email,
				password: password,
			})
			.then((response) => {
				resolve(response.data);
				// console.log(response.data);
			})
			.catch((error) => {
				reject(error.response.data);
			});
	});
};

export const logoutUser = async () => {
	await localStorage.removeItem("token");
	window.location.href = "/";
};

export const getToken = () => {
	return localStorage.getItem("token");
};
