import { useState } from "react";
import { Card } from "./components/Card"

export function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    const newTodo = {
      name: todo
    }

    setTodoList(prevState => [...prevState, newTodo])
  }
  
  return (
    <div className="App">
      <h1>Hello world</h1>
      <input 
        onChange={e => setTodo(e.target.value)}
        type="text"
      ></input>
      <button onClick={handleAddTodo}>Add</button>

      {todoList.map(todo => <Card name={todo.name}/>)}
    </div>
  );
}
