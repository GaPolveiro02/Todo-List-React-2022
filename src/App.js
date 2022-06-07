import { useState } from "react";
import { Card } from "./components/Card";

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
    <div className="App">
      <h1>Todo List</h1>
      <input 
        onChange={e => setTodo(e.target.value)}
        type="text"
        className="input"
      ></input>
      <button onClick={handleAddTodo}>Add</button>

      {todoList.map(todo => <Card name={todo.name} />)}
    </div>
  );
}
