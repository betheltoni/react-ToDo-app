import React, {useState} from 'react'
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

const AddTask = ({addTaskHandler}) => {
    const [todo, setTodo] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    
    let navigate = useNavigate();

    const add= (e) => {
        e.preventDefault();
        if (todo === "" || startTime === "" || endTime === ""){
            alert("All fields are mandatory");
            return;
        }
        addTaskHandler({todo,startTime,endTime})
        setTodo("");
        setStartTime("");
        setEndTime("");
        
        navigate("/");
        // console.log(todo); 
        // console.log(time);
    }
  return (
    <form className='add-task' onSubmit={add}>
        <div className='form-control'>
            <label>Todo</label>
            <input type="text" placeholder="Add Todo" value={todo} onChange={(e)=>{
                setTodo(e.target.value)
            }} />
        </div>
        <div className='form-control'>
            <label>Start Time</label>
            <input type="time" placeholder="Start-Time" value={startTime} onChange={(e)=>{
                setStartTime(e.target.value)
            }} />
        </div>
        <div className='form-control'>
            <label>End Time</label>
            <input type="time" placeholder="End-Time" value={endTime} onChange={(e)=>{
                setEndTime(e.target.value)
            }} />
        </div>
        <button className='btn btn-block'>Save</button>
        <Link to="/">
        <button className='btn btn-block'>Back</button>
        </Link>
    </form>
  )
}

export default AddTask