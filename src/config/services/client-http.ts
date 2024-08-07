import axios from "axios";

export const api = axios.create({
    baseURL: 'https://thronesapi.com/api/v2/'
})