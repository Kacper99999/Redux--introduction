import { useSelector } from "react-redux"
import { getTasks, getStatusFilter} from "../../redux/selectors";
import { statusFilters } from "../../redux/constants";
import { Task } from "../Task/Task";

const getVisibleTasks = (tasks, statusFilter) => {
    switch(statusFilter) {
        case statusFilters.active:
           return tasks.filter(task => !task.completed);
        case statusFilters.completed:
           return  tasks.filter(task => task.completed);
           default :
           return tasks;
    }

}

export const TasksList = () => {

    const tasks = useSelector(getTasks);
    const statusFilter = useSelector(getStatusFilter);
    const visibletasks = getVisibleTasks(tasks, statusFilter);

    return(
        <>
        <ul>
            {visibletasks.map(task => (   
                <li key={task.id}>
                    <Task task = {task}/>
                </li>
            ))}
        </ul>
        </>
    )
}