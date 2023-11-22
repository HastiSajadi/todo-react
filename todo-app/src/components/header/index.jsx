import styles from './header.module.css'
import {CiCirclePlus} from 'react-icons/ci'
import { useState } from 'react'

export function Header({onAddTask}){

    const [title , setTitle] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event){
        setTitle(event.target.value);
    }

    return(
        <header className={styles.header}>
            <h1>To <span>Do</span></h1>

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input placeholder='add a new task' type='text' value={title} onChange={onChangeTitle} />
                <button>
                    Add Task
                    <CiCirclePlus size={20} />
                </button>
               </form>
        </header>
    )
}