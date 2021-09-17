import React, {useContext} from 'react';
import Context from './context';

export default function TodoItem({ todo, onChange }) {
    const {deleteTodo} = useContext(Context);
    const classes = [];

    if (todo.completed) {
        classes.push('marked-as-done');
    }

    return (
        <li className={classes.join(' ')}>
          {todo.title}
          <div className="list-element-options">
            <input 
              className="list-element-checkbox" 
              id="done-checkbox"
              checked={todo.completed}
              type="checkbox" 
              onChange={() => onChange(todo.id)}     
            />
            <button 
              className="list-element-button" 
              id="delete-button" 
              onClick={deleteTodo.bind(null, todo.id)}
            >Delete</button>
          </div>
          </li>
    )
}