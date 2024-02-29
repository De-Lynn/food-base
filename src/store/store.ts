import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import resultsReducer from "./resultsReducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        results: resultsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispath = typeof store.dispatch