import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

export const state = configureStore({
    reducer : {
        tasks : tasksReducer,
        filters : filtersReducer,
    }

    
})