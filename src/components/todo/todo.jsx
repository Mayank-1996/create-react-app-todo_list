import React from "react";
import Timer from "../timer/timer";
import "./todo.css";

export default function Todo({ task, complete }) {
  return (
    <div className="todo">
      <p>{task.val} | </p>
      {task.time ? (
        <p>{task.time}</p>
      ) : (
        <Timer key={task.val} task={task} endTodo={complete} />
      )}
    </div>
  );
}
