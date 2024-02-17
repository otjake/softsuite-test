import axios from "axios";
import Qs from "qs";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

let headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

let locale = localStorage.getItem("locale");
if (locale) headers["X-Locale"] = locale;

const HTTP = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers,
});

HTTP.interceptors.request.use((config) => {
    config.paramsSerializer = (params) => {
        return Qs.stringify(params, {
            arrayFormat: "brackets",
            encode: false,
        });
    };

    NProgress.start();
    return config;
});

HTTP.interceptors.response.use(
    (response) => {
        NProgress.done();
        if(response.statusText != "OK"){
            return Promise.reject("error occured");
        }
        return response;
    },
    async function (error) {
        NProgress.done();
        if (error.response) {
            const {status} = error.response;

            switch (status) {
                case 401:
                    // add error page here
                    return Promise.reject(error);
                default:
                    return Promise.reject(error);
            }
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            return Promise.reject(error);
        } else {
            // Something happened in setting up the request that triggered an Error
            return Promise.reject(error);
        }
    },
);


export {HTTP};
