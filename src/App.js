import { useState } from "react";
import { Card } from "./components/Card";
import "./styles/app.css"

export function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const input = document.querySelector(".input")

  const clearInput = () => {
    input.value = ''
  }

  const handleAddTodo = () => {
    if (input.value == '') {
      alert("Digite um todo")
    } else {
      const newTodo = {
        name: todo
      }
  
      setTodoList(prevState => [...prevState, newTodo])
      clearInput()
      setTodo('')
    }
  }
  
  return (
    <div className="container">
      <header>
      <h1>Todo <strong>List</strong></h1>
      <input 
        onChange={e => setTodo(e.target.value)}
        type="text"
        className="input"
        placeholder="Type a todo..."
      ></input>
      <button onClick={handleAddTodo}>Add</button>
      </header>
      
      <ul>
        {todoList.map(todo => <li><Card name={todo.name} /></li>)}
      </ul>

      <footer>
        <p>Made by <a>GaPolveiro02</a></p>
      </footer>
    </div>
  );
}
