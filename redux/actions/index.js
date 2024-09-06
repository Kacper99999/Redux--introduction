import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask", (payload) => {
    return{
        id:nanoid,
        text:payload,
        complited:false
    }
});

export const delateTask = createAction("tasks/delateTask");

export const toggleComplited = createAction("tasks/toggelComplited");

export const setStatusFilter = createAction("tasks/setStatusFilter");