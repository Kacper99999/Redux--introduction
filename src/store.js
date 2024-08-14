import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './tasks/TasksSlice'

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
});
