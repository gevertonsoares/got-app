import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getCharacters from "../../config/services/getCharacters.service";
import { GlobalState } from "..";

export interface Character {
  id: number;
  family: string;
  firstName: string;
  fullName: string;
  image: string;
  imageUrl: string;
  lastName: string;
  title: string;
}

interface InitialStateType {
    payload: Character[]
}

const initialState: InitialStateType = {
  payload: [],
};

export const fetchGetCharacters = createAsyncThunk(
  "characters/get",
  async () => {
    const result = await getCharacters();

    return result;
  }
);

const listCharactersSlice = createSlice({
  name: "list-character",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetCharacters.fulfilled, (state, action) => {
      state.payload = action.payload;
    });
  },
});

export default listCharactersSlice.reducer;
export const selectCharacters = (store: GlobalState) => store.listCharacters;
