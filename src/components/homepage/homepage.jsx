import React, { useState } from "react";
import Todo from "../todo/todo";
import "./homepage.css";

export default function Homepage() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    localStorage.setItem(
      "todos",
      JSON.stringify([...todos, { val: inputVal, active: true }])
    );
    setTodos(JSON.parse(localStorage.getItem("todos")));
    setInputVal("");
  }

  function completeTodo(v, m, s) {
    let newTodoList = todos.filter((state) => state.val !== v);
    localStorage.setItem("todos", JSON.stringify(newTodoList));

    setTodos(JSON.parse(localStorage.getItem("todos")));

    localStorage.setItem(
      "completed-todos",
      JSON.stringify([
        ...completedTodos,
        { val: v, active: false, time: `${m}mins ${s}secs elapsed` },
      ])
    );
    setCompletedTodos(JSON.parse(localStorage.getItem("completed-todos")));
  }

  return (
    <div className="homepage">
      <div className="newTodos">
        <input onChange={(e) => handleChange(e)} value={inputVal} type="text" />
        <button onClick={addTodo}>Add</button>
        {todos &&
          todos.map((val) => (
            <Todo
              key={val}
              task={val}
              complete={(v, m, s) => completeTodo(v, m, s)}
            />
          ))}
      </div>
      <div className="completedTodos">
        <h1>Completed</h1>
        {completedTodos.map((val) => (
          <Todo key={val} task={val} />
        ))}
      </div>
    </div>
  );
}
