import Header from "./components/Header"
import  Tasks from "./components/Tasks"
import {useState} from "react"
import AddTask from "./components/AddTask"  

function App() {
  const [showAddTasks, setShowAddTasks] = useState(true)
  const [tasks, setTasks] = useState("")
//Add Tasks
const addTask =(task)=>{
  const id = Math.floor(Math.random()* 1000) +1;
  
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

//delete tasks
  const deleteTask = (id) =>{
    setTasks(tasks.filter((tasks)=> tasks.id !== id ))
  }
  // toggle reminder
  const toggleReminder = (id)=>{
    setTasks(
      tasks.map((tasks)=> tasks.id === id ? {
        ...tasks, reminder: !tasks.reminder
      } : tasks)
    )
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTasks(!showAddTasks)} showAdd={showAddTasks}/>
      { showAddTasks && <AddTask onAdd = {addTask} />}
      {tasks.length>0 ? <Tasks 
      tasks={tasks} 
      onDelete ={deleteTask}
      onToggle = {toggleReminder}
       /> : "No tasks to display"}
       
    </div>
  );
}

export default App;
