import { getToken } from "@/controllers/userController";
import jwt_decode from "jwt-decode";

export const getUserData = (token: string) => {
	const decoded = jwt_decode(token);
	return decoded;
};
