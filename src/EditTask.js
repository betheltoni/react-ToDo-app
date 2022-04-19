
import React, {useState} from 'react'
import { useNavigate } from "react-router";
import { Link, useLocation } from 'react-router-dom';

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

    const taskValue = retrieveTasks.filter((task) => {
        console.log(task.id, Number(key))
        return task.id === Number(key);
    })
    console.log(taskValue);
    console.log(taskValue[0].id, taskValue[0].todo, taskValue[0].startTime, taskValue[0].endTime);


    //query tasks for key
    // let currentItem = retrieveTasks.find(x => x.todo === key);
    // console.log(currentItem);

    //set todo as = currentItem.todo
    //set time as = currentItem.time

    const [todo, setTodo] = useState(taskValue[0].todo);
    const [startTime, setStartTime] = useState(taskValue[0].startTime);
    const [endTime, setEndTime] = useState(taskValue[0].endTime);
    let id= key;
    
    let navigate = useNavigate();
    console.log(todo,startTime,endTime,key);
    


    const edit= (e) => {
        e.preventDefault();
        
        console.log(todo,startTime,endTime)
        if (todo === "" || startTime === "" || endTime === ""){
            alert("All fields are mandatory");
            return;
        }
        const update = retrieveTasks.map((task) => {
            console.log(key, task.id);
            if(task.id === key){
                return{
                    ...task,
                    id: key,
                    todo: todo,
                    startTime: startTime,
                    endTime: endTime
                };
            }
            return task;
        });
        console.log(update)
        updateTaskHandler({id,todo,startTime,endTime,})
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(update));
        
        navigate("/");
        // console.log(todo); 
        // console.log(time);
    }
    
  return (
    <form className='add-task'onSubmit={edit} >
        <div className='form-control'>
            <label>Todo</label>
            <input type="text" placeholder="Add Todo" defaultValue={taskValue[0].todo} onChange={(e) => {
                setTodo(e.target.value)
            }} />
        </div>
        <div className='form-control'>
            <label>Start Time</label>
            <input type="time" placeholder="Start-Time" defaultValue={taskValue[0].startTime} onChange={(e) => {
                setStartTime(e.target.value)
            }}  />
        </div>
        <div className='form-control'>
            <label>End Time</label>
            <input type="time" placeholder="End-Time" defaultValue={taskValue[0].endTime} onChange={(e) => {
                setEndTime(e.target.value)
            }}  />
        </div>
        <button className='btn btn-block'>update</button>
        <Link to="/">
        <button className='btn btn-block'>back</button>
        </Link>
    </form>
  )
}

export default EditTask