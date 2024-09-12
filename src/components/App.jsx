import { useState } from 'react'
import { AppBar } from './AppBar/AppBar'
import { StatusFilter } from './StatusFilter/StatusFilter'
import { TasksForm } from './TasksForm/TasksForm'
import { TasksList } from './TasksList/TasksList'
import { TaskCounter } from './TaskCounter/TaskCounter'

function App() {

  return (
    <>
    <AppBar></AppBar>
    <StatusFilter></StatusFilter>
    <TasksForm></TasksForm>
    <TasksList></TasksList>
    <TaskCounter></TaskCounter>
    </>
  )
}

export default App
