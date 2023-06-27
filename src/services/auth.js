import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
    baseURL : 'https://connections-api.herokuapp.com/'
})

export const setToken = (token) => {
    instance.defaults.headers.common['Authorization'] = token
}

export const dellToken = () => {
    delete instance.defaults.headers.common['Authorization']
}

export const registerFetch = async (credentials) => {
        const { data } = await instance.post('users/signup', credentials);
        return data;
}

export const loginFetch = async (credentials) => {
        const { data } = await instance.post('users/login', credentials);
        if ('token' in data) setToken(`Bearer ${data.token}`)
        return data;
};

export const logoutFetch = async (credentials) => {
        const { data } = await instance.post('users/logout', credentials);
        dellToken();
        return data;
};
    
export const getProfileFetch = async (token) => {
    setToken(`Bearer ${token}`);
    const { data } = await instance.get('users/current');
    console.log(data)
           return data;
    };



