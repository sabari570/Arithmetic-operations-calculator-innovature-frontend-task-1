import store from "@/store/store";
import { GET_USER_ACCESSTOKEN_GETTER } from "@/store/storeConstants";
import axios from "axios";

// creating an axios instance
const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_BASE_URL
});

// Adding a request interceptor
axiosInstance.interceptors.request.use(
    function (config){
        const accessToken = store.getters[`auth/${GET_USER_ACCESSTOKEN_GETTER}`];

        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }

        return config;
    },
    function (error){
        return Promise.reject(error);
    }
);

export default axiosInstance;