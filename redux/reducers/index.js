import { combineReducers } from "redux";
import { createReducer, nanoid } from "@reduxjs/toolkit";
import { addTask, delateTask, setStatusFilter, toggleComplited } from "../actions";



const tasksInitialState = [];

const tasksReducers = createReducer(tasksInitialState,{
    [addTask]: (state, action) =>{
        return{
            ...state,
            tasks:[...state.tasks, action.payload]

        }
    },
    [delateTask]: (state, action) =>{
        return state.filter(task=> task.id !== action.payload)
        
    },
    [toggleComplited]: (state, action) =>{
        return state.map(task =>{
            if(task.id !== action.payload){
                return task
            }
            return {...task, complited: !task.complited}
        })
    }
})

const filtersInitialState = [];

const filtersReducers = createReducer(filtersInitialState,{
    [setStatusFilter]: (state, action) => {
        return {
            ...state, 
            status:action.payload
        }
    } 
})

export const filtersReducer = (state = filtersInitialState, action) =>{

}

export const rootReducer = combineReducers({
    tasks:tasksReducers,
    filters:filtersReducer
})