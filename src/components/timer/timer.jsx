import React, { useEffect, useState } from "react";

export default function Timer({ endTodo, task }) {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(false);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let interval = null;
    if (timer) {
      interval = setInterval(() => {
        if (time == 59) {
          setMinutes(minutes + 1);
          setTime(0);
        } else {
          setTime((time) => time + 1);
        }
      }, 1000);
    } else if (!timer && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer, time, minutes]);

  function updateTimer(e) {
    setTimer(true);
  }

  function stopTimer() {
    setTimer(false);
    endTodo(task.val, minutes, time);
  }

  return (
    <div>
      <h1>
        {minutes}m:{time}s
      </h1>
      {!timer && task.active ? (
        <button onClick={(e) => updateTimer(e)} value="start">
          start
        </button>
      ) : (
        <button onClick={(e) => stopTimer(e)} value="start">
          end
        </button>
      )}
    </div>
  );
}
