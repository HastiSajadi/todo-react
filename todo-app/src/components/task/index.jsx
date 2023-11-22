import { TaskList } from '../task-list'
import styles from './task.module.css'

export function Task({tasks , onComplete}){
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;
    return(
        <section className={styles.task}>
            <header className={styles.header}>
                <div>
                    <p> Create Tasks</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span>{completedTasks} of {tasksQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map(task => (
                    <TaskList key={task.id} task={task} onComplete={onComplete} />
                )
                )}
            </div>
        </section>
    )
}