import isAuthenticated from "@/lib/isAuthenticated";
import axios from "axios";

const API_URL = process.env.API_URL;

export const registerUser = async (e: any) => {
	e.preventDefault();
	return new Promise(async (resolve, reject) => {
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
			})
			.catch((error) => {
				reject(error.response.data);
			});
	});
};

export const postNewService = async (e: any, user: any) => {
	e.preventDefault();
	return new Promise(async (resolve, reject) => {
		const form = new FormData(e.target);
		const { name, description, price } = Object.fromEntries(form);

		await axios
			.post(`${API_URL}/api/services`, {
				name: name,
				description: description,
				price: price,
                user: user
			})
			.then((response) => {
				resolve(response.data);
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

export async function getUser(id: any) {
	return new Promise(async (resolve, reject) => {
		await axios
			.get(`${API_URL}/api/users/${id}`)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error.response.data);
			});
	});
}
