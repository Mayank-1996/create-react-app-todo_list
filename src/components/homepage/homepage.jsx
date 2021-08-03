import React, { useState } from "react";
import Todo from "../todo/todo";
import "./homepage.css";
import { addToStorage, getFromStorage } from "../../localStorageHandler";

export default function Homepage() {
  const [todos, setTodos] = useState(
    getFromStorage("todos") ? getFromStorage("todos") : []
  );
  const [inputVal, setInputVal] = useState("");
  const [completedTodos, setCompletedTodos] = useState(
    getFromStorage("completed-todos") ? getFromStorage("completed-todos") : []
  );

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    addToStorage("todos", [...todos, { val: inputVal, active: true }]);

    setTodos(getFromStorage("todos"));
    setInputVal("");
  }

  function completeTodo(v, m, s) {
    let newTodoList = todos.filter((state) => state.val !== v);
    addToStorage("todos", newTodoList);
    console.log(todos);
    setTodos(getFromStorage("todos"));

    addToStorage("completed-todos", [
      ...completedTodos,
      { val: v, active: false, time: `${m}mins ${s}secs elapsed` },
    ]);
    setCompletedTodos(getFromStorage("completed-todos"));
  }

  return (
    <div className="homepage">
      <div className="newTodos">
        <input
          data-testid="inputField"
          onChange={(e) => handleChange(e)}
          value={inputVal}
          type="text"
        />
        <button
          data-testid="add-todo-button"
          className="add-todo-button"
          onClick={addTodo}
        >
          Add
        </button>
        {todos &&
          todos.map((val, i) => (
            <Todo
              data-testid="active-todo"
              key={i}
              task={val}
              complete={(v, m, s) => completeTodo(v, m, s)}
            />
          ))}
      </div>
      <div className="completedTodos">
        <h1>Completed</h1>
        {completedTodos.map((val, i) => (
          <Todo key={i} task={val} />
        ))}
      </div>
    </div>
  );
}
