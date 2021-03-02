import React, { useState, useEffect } from "react";
import "./pomodoro.css";

export default function Pomodoro() {
  let audio = new Audio("/bell.mp3");
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let _minutes;

          if (count === 3) {
            _minutes = 15 - 1;
            setCount(0);
          } else {
            _minutes = displayMessage ? 25 - 1 : 5 - 1;
          }
          let _seconds = 59;

          setSeconds(_seconds);
          setMinutes(_minutes);
          audio.play();
          setDisplayMessage(!displayMessage);
          setCount((count) => count + 1);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  return (
    <div className="pomodoro">
      {displayMessage && <div className="message">Break time!</div>}
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
}
