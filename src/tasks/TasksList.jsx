import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeTask} from "./TasksSlice";

const TasksList = () => {
    // Wyciąganie listy zadań ze stanu Redux
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
  //  const [remove, setRemove] = useState("");
    
    const handleRemoveTask = (id) => {
        dispatch(removeTask(id))
    }

    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.text}
                    <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TasksList;