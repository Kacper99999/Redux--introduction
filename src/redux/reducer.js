
import { ADD_TASK } from "./actions";

const initialState = {
    tasks : []
}

function taskReduce (state = initialState.tasks, action){
    switch(action.type){
        case ADD_TASK:
        return[
            ...state,
            {id : Date.now , payload : action.payload.text, complited : false}
        ]
        default : 
        return state;
    }
    
}

export default function rootReducer(state = initialState, action){
    return {
        task:taskReduce(state.tasks, action)
    }
}