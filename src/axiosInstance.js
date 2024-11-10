import axios from "axios"

const axiosInstance = axios.create({
	baseURL: "http://localhost:3000", // URL of the backend server
	timeout: 10000, // Optional: Set a timeout for requests
	headers: {
		"Content-Type": "application/json", // Optional: Set default headers
	},
})

export default axiosInstance
