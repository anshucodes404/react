import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/todoSlice/todoSlice"

export const store = configureStore({
    reducer: todoReducer
})