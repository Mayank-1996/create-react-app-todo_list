import React from "react";
import Timer from "../timer/timer";
import "./todo.css";

export default function Todo({ task, complete }) {
  return (
    <div className="todo">
      <p data-testid="task-value">{task.val} | </p>
      {task.time ? (
        <p data-testid="task-time">{task.time}</p>
      ) : (
        <Timer key={task.val} task={task} endTodo={complete} />
      )}
    </div>
  );
}
