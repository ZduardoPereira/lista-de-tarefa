import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:5000", // Verifique se esta URL está correta
});

export default api;
