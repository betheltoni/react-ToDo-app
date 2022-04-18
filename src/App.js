import React, {useState, useEffect} from 'react'
import "./index.css"
import Header from "./Header"
import AddTask from "./AddTask"
import TodoList from "./TodoList"
import EditTask from './EditTask'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {

  // const tasks = [
  //   {
  //     id: "1",
  //     task: "todo 1",
  //     time: "12pm"
  //   },
  //   {
  //     id: "2",
  //     task: "todo 2",
  //     time: "2pm"
  //   },
  // ]
    const LOCAL_STORAGE_KEY = "tasks";
    const [tasks, setTasks] = useState([]);

    const id = Math.floor(Math.random()* 1000) +1;

    const addTaskHandler =(task)=> {
      // console.log(task);
      

      const newTask = { id, ...task}
      setTasks([...tasks, newTask])
    };

    const removeTaskHandler = (id) => {
      const newTaskList = tasks.filter((task) => {
        return task.id !== id;
      })
      setTasks(newTaskList);
    }

    const toggleTaskHandler = (id) => {
      setTasks(
        tasks.map((tasks)=> tasks.id === id ? {
          ...tasks, reminder: !tasks.reminder
        } : tasks)
      )
    }

    const updateTaskHandler = ( updatedTask) => {
    const updatedTaskList = tasks.map((task) => {
      console.log(updatedTask, task);
      console.log(task.id, updatedTask.id)
      if(task.id === updatedTask.id){
        
        task.todo = updatedTask.todo;
        task.time = updatedTask.time;
        console.log("bethel")
        
      }
      console.log(updatedTask, task);
      return task;

    })
  
    const updatedTasks = {id,...updatedTask}
    setTasks(updatedTaskList);
  }
    
    

    useEffect(() => {
      const retrieveTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(retrieveTasks) setTasks(retrieveTasks)
    }, [])

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks])

    
  return (
    <div className='container'>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/edit' element={<EditTask updateTaskHandler={updateTaskHandler} />} />
        <Route path='/add' element={<AddTask addTaskHandler={addTaskHandler}/>} />
        <Route path='/' element={<TodoList tasks={tasks} getTaskId = {removeTaskHandler} toggleTaskId={toggleTaskHandler} />} /> 
      </Routes>
        {/* <AddTask addTaskHandler={addTaskHandler} />
        <TodoList tasks={tasks} getTaskId = {removeTaskHandler} toggleTaskId={toggleTaskHandler} /> */}
      </BrowserRouter>
    </div>
  )
}

export default App