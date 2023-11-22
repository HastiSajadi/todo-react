import styles from './task-list.module.css'
import {TbTrash} from 'react-icons/tb'

export function TaskList(){
    return(
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div/>
            </button>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, dicta.</p>
            <button className={styles.deleteButton}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}