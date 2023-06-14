import isAuthenticated from "@/lib/isAuthenticated";
import axios from "axios";

const API_URL = process.env.API_URL;

export const getServices = async () => {
	return new Promise(async (resolve, reject) => {
		await axios
			.get(`${API_URL}/api/services`)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				reject(error.response.data);
			});
	});
};
