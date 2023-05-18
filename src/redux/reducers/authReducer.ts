interface AuthState {
	isLoggedIn: boolean;
	user: { username: string } | null;
	error: string | null;
}

const initialState: AuthState = {
	isLoggedIn: false,
	user: null,
	error: null,
};

const authReducer = (
	state = initialState,
	action: { type: string; payload: any }
): AuthState => {
	switch (action.type) {
		case "LOGIN_SUCCESS":
			return {
				...state,
				isLoggedIn: true,
				user: action.payload,
				error: null,
			};
		case "LOGIN_ERROR":
			return {
				...state,
				isLoggedIn: false,
				user: null,
				error: action.payload,
			};
		case "LOGOUT":
			return {
				...state,
				isLoggedIn: false,
				user: null,
				error: null,
			};
		default:
			return state;
	}
};

export default authReducer;
