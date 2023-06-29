import { loginFetch, registerFetch, getProfileFetch, logoutFetch } from "services/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const register = createAsyncThunk('auth/register', async (body,{rejectWithValue}) => {
    try {
        registerFetch(body);
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const getCurrentProfile = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) return thunkAPI.rejectWithValue(); 
    try {
        const data = getProfileFetch(persistedToken);
        return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);  
    }
   
})

export const login = createAsyncThunk('auth/login', async (body, {dispatch, rejectWithValue}) => {
    try {
        const data = await loginFetch(body)
        // dispatch(getCurrentProfile())
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    try {
        const data = await logoutFetch()
        console.log(data)
        return data;

    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})



