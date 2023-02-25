import React, {useState} from 'react'
import './TodoList.css'

import Todo from './Todo'

export default function TodoList({todos, handleRemove, handleCheck}) {

  return (
    <div className='todo-list'>
        {todos.map((todo, index) => <Todo 
            key={index}
            todo={todo.todo}
            id={todo.id}
            handleRemove={handleRemove}
            handleCheck={handleCheck}
            isChecked={todo.isChecked}
        />)}
    </div>
  )
}
