import React from 'react';
import TodoItem from "./TodoItem";

export default function TodoList(props) {
    return(
      <div>
         <h1>ToDo List</h1>
         <ul>
          {props.todoItems.map(todo => {
              return <TodoItem todo={todo} key={todo.id} onChange={props.onToggle} />
          })}
        </ul>
      </div>
    )
}