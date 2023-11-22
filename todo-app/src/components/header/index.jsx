import styles from './header.module.css'
import {CiCirclePlus} from 'react-icons/ci'

export function Header(){
    return(
        <header className={styles.header}>
            <h1>To <span>Do</span></h1>

            <form className={styles.newTaskForm}>
                <input placeholder='add a new task' type='text' />
                <button>
                    Add Task
                    <CiCirclePlus size={20} />
                </button>
               </form>
        </header>
    )
}