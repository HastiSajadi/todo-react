import { useState } from 'react'
import {Header} from './components/header'
import {Task} from './components/task'

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskTitle){
    setTasks([
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
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Task
       tasks={tasks}
       onComplete={toggleTaskCompletedById}
       />
    </>
  )
}

export default App
