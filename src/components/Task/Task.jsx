import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/operations";
import { MdClose } from "react-icons/md";

export const Task = ({task}) =>{

    const dispatch = useDispatch();

    const handleTask = () => {

     dispatch(deleteTask(task.id))}

    const handleToggle = () => {
        dispatch(toggleCompleted(task));};

    return(
        <div className={css.div}>
            <input 
            type="checkbox"
            className={css.checkbox}
            onChange={handleToggle}
             />
             <p className={css.text}>{task.title}</p>
             <button className={css.btn} onClick={handleTask}>
                <MdClose size={24}/>
             </button>
        </div>
    )
}




