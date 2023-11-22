import styles from './task-list.module.css';
import {TbTrash} from 'react-icons/tb';
import {BsFillCheckCircleFill} from 'react-icons/bs';

export function TaskList({task,onComplete}){
    return(
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={()=>onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill/> : <div/>}
            </button>

            <p>{task.title}</p>
            <button className={styles.deleteButton}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}