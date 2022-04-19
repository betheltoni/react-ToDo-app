import React from 'react'
import {FaTimes, FaEdit } from "react-icons/fa"
import { Link,  } from 'react-router-dom'


const TodoCard = (props) => {
    const { id,todo, startTime, endTime, reminder,} = props.tasks

    
  return (
    <div className={`task ${reminder ? "reminder" : ""}`} onDoubleClick={() => props.dobleClickHandler(id)}>
    
    <h3> {todo} 
     <FaTimes onClick={()=> props.clickHandler(id)}   style={{color:"red", cursor:"pointer"}} />
     </h3>

     <p> {startTime} 
     <Link to={'/edit?q=' + id }>
     <FaEdit   style={{color:"green", cursor:"pointer"}} />
     </Link>
     </p>
     <p>
       {endTime}
     </p>
    </div>
  )
}

export default TodoCard