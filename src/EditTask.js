
import React, {useState} from 'react'
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';

const LOCAL_STORAGE_KEY = "tasks";

const EditTask = ({updateTaskHandler}) => {

    //get location details
    let query = useLocation();
    const searchParams = new URLSearchParams(query);
    const key = searchParams.get('search').substring(3,4);

    //get todolist from local storage
    const retrieveTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    //query tasks for key
    let currentItem = retrieveTasks.find(x => x.todo == key);
    console.log(currentItem);

    //set todo as = currentItem.todo
    //set time as = currentItem.time

    const [todo, setTodo] = useState("");
    const [time, setTime] = useState("");
    let navigate = useNavigate();

    const edit= (e) => {
        e.preventDefault();
        if (todo === "" || time === ""){
            alert("All fields are mandatory");
            return;
        }
        updateTaskHandler([todo,time])
        setTodo("");
        setTime("");
        
        navigate("/");
        // console.log(todo); 
        // console.log(time);
    }
    
  return (
    <form className='add-task'onSubmit={edit} >
        <div className='form-control'>
            <label>Todo</label>
            <input type="text" placeholder="Add Todo" value={todo} onChange={(e) => {
                setTodo(e.target.value)
            }} />
        </div>
        <div className='form-control'>
            <label>Time</label>
            <input type="text" placeholder="Time" value={time} onChange={(e) => {
                setTime(e.target.value)
            }}  />
        </div>
        <button className='btn btn-block'>update</button>
    </form>
  )
}

export default EditTask