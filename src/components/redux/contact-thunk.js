import { getContacts, addContact, deleteContact } from "services/fetchContacts"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getContactsThunk = createAsyncThunk('contacts/getAllContacts',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) return thunkAPI.rejectWithValue();
        try {
            const data = await getContacts(persistedToken)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
       
    }
    )

export const addContactsThunk = createAsyncThunk('contacts/getAddContact',
    async (body, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) return thunkAPI.rejectWithValue();
        try {
            const data = await addContact(persistedToken, body)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)   
export const deleteContactsThunk = createAsyncThunk('contacts/getDeleteContact',
    async (id, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) return thunkAPI.rejectWithValue();
        try {
            const data = await deleteContact(persistedToken, id);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)
    