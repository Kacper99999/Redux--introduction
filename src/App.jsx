import 'react'
import './App.css'
import { Task } from './components/Task'
import TasksList from './tasks/TasksList';

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Task></Task>
      <TasksList></TasksList>
    </>
  )
}

export default App
