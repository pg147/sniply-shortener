// Axios Instance for API
import { axiosInstance } from "../lib/axios.js";

export async function ConvertURLService(URL) {
    const response = await axiosInstance.post('/url/create', { URL });
    const data = response.data;

    // If the response is fetched successfully
    if (response && response?.data?.success) return data;
}