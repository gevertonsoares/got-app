import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./modules/charactersSlice";


export const store = configureStore({
    reducer: {
        listCharacters: charactersSlice
    },
})

export type GlobalState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
