import axios from 'axios';
import AuthService from "../auth/AuthService";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get(url) {
        return axios.get(`${process.env.REACT_APP_API_DOMAIN}${url}`, {
            headers: {
                Authorization: `Bearer ${AuthService.authToken}`,
            }
        });
    },

    post(url, data) {
        return axios.post(`${process.env.REACT_APP_API_DOMAIN}${url}`, data, {
            headers: {
                Authorization: `Bearer ${AuthService.authToken}`,
            }
        });
    },

    put(url, data) {
        return axios.put(`${process.env.REACT_APP_API_DOMAIN}${url}`, data, {
            headers: {
                Authorization: `Bearer ${AuthService.authToken}`,
            }
        });
    },

    delete(url) {
        return axios.delete(`${process.env.REACT_APP_API_DOMAIN}${url}`, {
            headers: {
                Authorization: `Bearer ${AuthService.authToken}`,
            }
        });
    },

    login(username, password) {
        return axios.post(`${process.env.REACT_APP_API_DOMAIN}/api/auth/signin`, {
            phone_number: username,
            password: password,
        });
    }
};
