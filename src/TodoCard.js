import React from 'react'
import {FaTimes, FaCheck } from "react-icons/fa"
import { Link,  } from 'react-router-dom'


const TodoCard = (props) => {
    const { id,todo, time, reminder,} = props.tasks

    
  return (
    <div className={`task ${reminder ? "reminder" : ""}`} onDoubleClick={() => props.dobleClickHandler(id)}>
    
    <h3> {todo} 
     <FaTimes onClick={()=> props.clickHandler(id)}   style={{color:"red", cursor:"pointer"}} />
     </h3>

     <p> {time} 
     <Link to={'/edit?q=' + id }>
     <FaCheck   style={{color:"green", cursor:"pointer"}} />
     </Link>
     </p>
    </div>
  )
}

export default TodoCard