import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
import css from "./TaskCounter.module.css";

export const TaskCounter = () =>{

    const tasks = useSelector(getTasks);

    const count = tasks.reduce(
        (acc, task) => {
            if(task.completed){
                count.completed  = count.completed+1;
            }
            else{
                count.active = count.active+1;
            }
            return acc
        },
        {active : 0 , completed : 0}
    )

    return(
        <div>
            <p className={css.text}>Active:{count.active}</p>
            <p className={css.text}>Completed:{count.completed}</p>
        </div>
    )
}
