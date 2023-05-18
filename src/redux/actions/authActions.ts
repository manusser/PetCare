import axios from "axios";

const API_URL = process.env.API_URL;

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";

export const registerUser = (formData: any) => {
	return async (dispatch: any) => {
		dispatch({ type: REGISTER_USER_REQUEST });

		try {
			const response = await axios.post(
				`${API_URL}/api/users/register`,
				formData
			);
			dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
		} catch (error: any) {
			dispatch({ type: REGISTER_USER_FAILURE, payload: error.response.data });
		}
	};
};

export const loginUser = (formData: any) => {
	return async (dispatch: any) => {

		dispatch({ type: LOGIN_USER_REQUEST });

		try {
			const response = await axios.post(`${API_URL}/api/users/login`, formData);
			dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
		} catch (error: any) {
			dispatch({ type: LOGIN_USER_FAILURE, payload: error.response.data });
		}
	};
};

export const logoutUser = () => {
	return async (dispatch: any) => {
		await localStorage.removeItem("token");
		dispatch({ type: LOGOUT_USER });
		window.location.href = "/";
	};
};

export const getToken = () => {
	return localStorage.getItem("token");
};
