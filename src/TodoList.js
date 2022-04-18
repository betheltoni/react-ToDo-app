import React from 'react'
import { Link } from 'react-router-dom';

import TodoCard from './TodoCard';

const TodoList = (props) => {
    console.log(props);
    // const thirdEl = props.tasks;
    // let index = thirdEl.length - 1;
    // const bbb = (thirdEl[index]["1"])
    // console.log(bbb)

    const deleteTaskHandler = (id) => {
      props.getTaskId(id);
    }

    const toggleTask = (id) => {
      props.toggleTaskId(id);
    }

    
    

    const renderTodoList = props.tasks.map((task,index) => {
       return (
         <TodoCard tasks={task} key={index} clickHandler={deleteTaskHandler} dobleClickHandler={toggleTask}  /> 
       ); 
    })
  return (
    <div>
      <h2>Todo List 
        <Link to="/add">
          <button className='btn btn-header'>
          Add Todo
          </button>
        </Link>
      </h2>
        {renderTodoList}
    </div>
  )
}

export default TodoList