import { TaskList } from '../task-list'
import styles from './task.module.css'

export function Task(){
    return(
        <section className={styles.task}>
            <header className={styles.header}>
                <div>
                    <p> Create Tasks</p>
                    <span>10</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span>1 of 10</span>
                </div>
            </header>

            <div className={styles.list}>
                <TaskList />
            </div>
        </section>
    )
}