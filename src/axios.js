import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecom-back-ejep.onrender.com",
});

export default instance;
