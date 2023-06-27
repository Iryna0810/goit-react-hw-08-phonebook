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
}

const handleFulfiled = (state, { payload }) => {
    state.user.name = payload.user.name;
    state.user.email = payload.user.email;
    state.isLoggedIn = true
    state.token = payload.token   
 
    console.log(state.token)
}

const handleFulfiledProfile = (state, { payload }) => {
    state.isLoggedIn = true
    state.user = payload
    console.log(state.user)
}

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
            .addCase(logout.fulfilled,handleFulfiledLogout)
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
        
        
    }
    // extraReducers: {
    //     [register.fulfilled](state, {payload}) {
    //         state.user.name = payload.user.name;
    //         state.user.email = payload.user.email;
    //         // state.user.password = payload.password;
    //         state.token = payload.token;
    //         console.log(state.user);
    //         console.log(state.token);
    //     },
    //     [login.fulfilled](state, {payload}) {
    //         state.user = payload.user;
    //         state.token = payload.token;
    //         state.isLoggedIn = true;
    //         console.log(state.user);
    //                     console.log(state.token);
    //     },
        // setAuth(state, {payload}) {
        //     state.value = payload;
        }
    
)

export const authReducer = authSlice.reducer