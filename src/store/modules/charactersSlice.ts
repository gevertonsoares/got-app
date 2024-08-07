import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getCharacters from "../../config/services/getCharacters";

export const fetchGetCharacters = createAsyncThunk('characters/get', async () => {
    const result = await getCharacters()
    
    return result
})


const listCharacters = createSlice({
    name: "list-character",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchGetCharacters.fulfilled, (state, action) => {
            state = action.payload
        })

    }
})

export const listCharactersReducer = listCharacters.reducer