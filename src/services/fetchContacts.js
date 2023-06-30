import axios from "axios"
// import {setToken, dellToken} from './auth'

// axios.defaults.baseURL = 'https://646a61c35a6ce7a8a219b0d4.mockapi.io/'

const instance = axios.create({
    baseURL : 'https://connections-api.herokuapp.com/'
})
export const setToken = (token) => {
    instance.defaults.headers.common['Authorization'] = token
}

export const dellToken = () => {
    delete instance.defaults.headers.common['Authorization']
}

export const getContacts = async (token) => {
    setToken(`Bearer ${token}`);
    const {data} = await instance.get(`/contacts`)
    return data;
}

export const addContact = async(token, {name, number}) => {
    setToken(`Bearer ${token}`);
    const { data } = await instance.post(`/contacts`, {name, number})
    return data;
}

export const deleteContact = async (token, contactId) => {
    setToken(`Bearer ${token}`);
    const { data } = await instance.delete(`/contacts/${contactId}`)
    return data;
}