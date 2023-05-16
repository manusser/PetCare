export default async function isAuthenticated() {
	if (typeof window !== "undefined") {
		return localStorage.getItem("token") ? true : false;
	}
}
