import {useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasks/TasksSlice";

export function Task (){
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleText(e){
        e.preventDefault(); 
        dispatch(addTask(text))
        setText("");
    }

    return(
        <div>
            <form>
                <label>Add Task</label>
                <input type="text" onChange={e => setText(e.target.value)}/>
                <button onClick={handleText}>Add Task</button>
            </form>
        </div>
    )

}