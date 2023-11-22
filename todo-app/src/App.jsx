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

  return (
    <>
      <Header onAddTask={addTask}/>
      <Task tasks={tasks}/>
    </>
  )
}

export default App
