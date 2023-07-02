import axios from "axios";

// localhost
export const Axios = axios.create({
    baseURL: "http://localhost:8000/",
});