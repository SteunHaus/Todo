import React from 'react';
import './master.css';
import TodoList from './TodoList';
import Context from './context';
import TodoAdd from './TodoAdd';

function App() {
  const [todoItems, setTodoItems] = React.useState([
    {id: 1, completed: false, title: "Make a project"},
    {id: 2, completed: false, title: "Manage workspace"},
    {id: 3, completed: false, title: "Wash dishes"},
  ]);

  function toggleTodo(id) {
    setTodoItems(
      todoItems.map(todoItems => {
        if (todoItems.id === id) {
          todoItems.completed = !todoItems.completed;
        }
        return todoItems;
      }));
  }

  function deleteTodo(id) {
    setTodoItems(todoItems.filter(todo => todo.id !== id))
  }

  function todoAdd(title) {
    setTodoItems(todoItems.concat([
      {
        title,
        id: Date.now(),
        completed:false
      }
    ]));
  }

  return (
    <Context.Provider value={{deleteTodo}}>
      <TodoList todoItems={todoItems} onToggle={toggleTodo} />
      <TodoAdd onCreate={todoAdd} />
    </Context.Provider>
  );
}

export default App;
