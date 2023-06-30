import { createSlice } from "@reduxjs/toolkit";
import { getCurrentProfile, login, logout, register } from "./auth-thunk";


const initialState = {
    user: {name:'', email:'' },
    token: null,
    error: '',
}

const handlePending = (state) => {
    state.error= ''
}

const handleRejected = (state, {error, payload}) => {
    state.error = payload ?? error.message
}

const handleFulfiled = (state, { payload }) => {
    state.user.name = payload.user.name;
    state.user.email = payload.user.email;
    state.token = payload.token   
}

const handleFulfiledProfile = (state, { payload }) => {
    state.user = payload
}

const handleFulfiledLogout = (state) => {
    state.user = { name: '', email: '' };
    state.token = null;
    state.error = '';
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, handleFulfiled)
            .addCase(login.fulfilled, handleFulfiled)
            .addCase(getCurrentProfile.fulfilled, handleFulfiledProfile)
            .addCase(logout.fulfilled, handleFulfiledLogout)
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)       
    }
}    
)

export const authReducer = authSlice.reducer