
import React, {useState} from 'react'
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';

const LOCAL_STORAGE_KEY = "tasks";

const EditTask = ({updateTaskHandler}) => {

    //get location details
    let query = useLocation();
    console.log(query);
    const searchParams = new URLSearchParams(query);
    const key = searchParams.get('search').substring(3);
    console.log(key);

    //get todolist from local storage
    const retrieveTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(retrieveTasks);

    //query tasks for key
    // let currentItem = retrieveTasks.find(x => x.todo === key);
    // console.log(currentItem);

    //set todo as = currentItem.todo
    //set time as = currentItem.time

    const [todo, setTodo] = useState("");
    const [time, setTime] = useState("");
    
    let navigate = useNavigate();
    console.log(todo,time,key)

    const edit= (e) => {
        e.preventDefault();
        const update = retrieveTasks.map((task) => {
            console.log(key, task.id);
            if(task.id === key){
                return{
                    ...task,
                    
                    todo: todo,
                    time: time
                };
            }
            return task;
        });
        console.log(update)
        updateTaskHandler({todo,time,})
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(update));
        
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