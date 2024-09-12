import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const fetchTasks = createAsyncThunk(
    "tasks/fetchAll",
    async(_,thunkAPI) =>{
        try{
            const response = await axios.get("/todos");
            return response.data
        }catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addTask = createAsyncThunk(
    "tasks/addTask",
    async(text,thunkAPI) =>{
        try{
            const response = await axios.post("/todos", {title:text, completed:false})
            return response.data
        }catch(e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);

export const deleteTask = createAsyncThunk(
    "tasks/delateTasks",
    async(taskid,thunkAPI) =>{
        try{
            const response = await axios.delete(`/todos/${taskid}`)
            return response.data
        }catch(e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const toggleCompleted = createAsyncThunk(
    "tasks/toggleCompleted",
    async({task},thunkAPI) =>{
        try{
            const response = await axios.put(`todos/${task}`,{complete : !task.completed})
            return response.data
        }catch(e){
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)





