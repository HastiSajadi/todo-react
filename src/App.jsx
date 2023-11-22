import { useEffect } from 'react';
import { useState } from 'react'
import {Header} from './components/header'
import {Task} from './components/task'


const localStorageKey = "todo:savedTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks(){
    const saved = localStorage.getItem(localStorageKey);
    if(saved){
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(()=>{
    loadSavedTasks();
  },[])

  function setTasksAndSave(newTask){
    setTasks(newTask);
    localStorage.setItem(localStorageKey, JSON.stringify(newTask));
  }

  function addTask(taskTitle){
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isComplete: false
      }
    ])
  }

 

  function toggleTaskCompletedById(taskId){
    const newTasks = tasks.map( task =>{
      if(task.id === taskId){
        return{
          ...task,
        isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  function deleteTaskById(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Task
       tasks={tasks}
       onComplete={toggleTaskCompletedById}
       onDelete={deleteTaskById}
       />
    </>
  )
}

export default App
