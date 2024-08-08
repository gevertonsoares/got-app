import { isAxiosError } from "axios";
import { api } from "./client-http";

export default async function getCharacters() {
    try {
        const response = await api.get('/Characters')
        return response.data  
    } catch (err:unknown) {
        if (isAxiosError(err)) {
            return err.response?.data
        }
    }
}

