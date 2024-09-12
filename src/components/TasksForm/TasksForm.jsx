import { useDispatch  } from "react-redux";
import css from "./TasksForm.module.css";
import { addTask } from "../../redux/operations";

export const TasksForm = () => {
    const dispatch = useDispatch();

    const handleAdd = (task) => {
        task.preventDefault();
        const form = task.target;
        dispatch(addTask(task.target.elements.text.value));

        form.reset();
    }
    return(
        <>
        <form onSubmit={handleAdd}>
            <input 
            type="text"
            name="text"
            placeholder="Write new task..." />
            <button type="submit">Add Task</button>
        </form>
        </>
    )
}