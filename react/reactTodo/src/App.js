import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, addTodos] = useState([]);

  const add = () => {
    addTodos(todos.concat({ text: input }));
    setInput("");
  };

  const deletetodo = (ind) => {
    addTodos(
      todos.filter((v, i) => {
        return i != ind;
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        placeholder="add todos"
      />
      <button onClick={() => add()}>Add</button>
      <ul>
        {todos.map((todo, ind) => {
          return (
            <div>
              <li>{todo.text}</li>
              <button
                onClick={() => {
                  deletetodo(ind);
                }}
              >
                Del
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
