import styles from './task-list.module.css';
import {TbTrash} from 'react-icons/tb';
import {BsFillCheckCircleFill} from 'react-icons/bs';

export function TaskList({task,onComplete ,onDelete}){
    return(
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={()=>onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill/> : <div/>}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
            <button className={styles.deleteButton} onClick={()=>onDelete(task.id)}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}