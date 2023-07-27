import axios from "axios";

const instance = axios.create({
    baseURL: "https://back-mi.onrender.com",
});

export default instance;
