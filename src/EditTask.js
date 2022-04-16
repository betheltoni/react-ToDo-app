
import React, {useState} from 'react'
import { useNavigate } from "react-router";

const EditTask = ({updateTaskHandler}) => {
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