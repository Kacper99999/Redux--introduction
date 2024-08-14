


import {createSlice} from "@reduxjs/toolkit";

const initialState = [];


const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push({id:Date.now() , text : action.payload , complited : false})
        },
        removeTask: (state, action) => {
            return state.filter(task => task.id !== action.payload)
        }
    }
})
console.log(initialState)

export const {addTask, removeTask} = tasksSlice.actions;

export default tasksSlice.reducer;