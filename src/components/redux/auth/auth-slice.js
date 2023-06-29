import { createSlice } from "@reduxjs/toolkit";
import { getCurrentProfile, login, logout } from "./auth-thunk";


const initialState = {
    user: {name:'', email:'' },
    token: null,
    isLoggedIn: false,
    error: '',
}

const handlePending = (state) => {
    state.isLoggedIn = false
    state.error= ''
}

const handleRejected = (state, {error, payload}) => {
    state.isLoggedIn = false
    state.error = payload ?? error.message
    state.token = null
}

const handleFulfiled = (state, { payload }) => {
    state.user.name = payload.user.name;
    state.user.email = payload.user.email;
    state.isLoggedIn = true
    state.token = payload.token   
}

const handleFulfiledProfile = (state, { payload }) => {
    state.isLoggedIn = true
    state.user = payload}

const handleFulfiledLogout = (state) => {
    state.user = { name: '', email: '' };
    state.token = null;
    state.isLoggedIn = false;
    state.error = '';
    state.profile = null;
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, handleFulfiled)
            .addCase(getCurrentProfile.fulfilled, handleFulfiledProfile)
            .addCase(logout.fulfilled, handleFulfiledLogout)
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)       
    }
}    
)

export const authReducer = authSlice.reducer