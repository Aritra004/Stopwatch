import { useEffect } from "react";
import { useState } from "react";
import "./stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalid;
    if (isRunning) {
      intervalid = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalid);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 600) / 100);
  const miliseconds = time % 100;

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };

  return (
    <div className="watch-container">
      <p className="watch-time">
        {hours} : {minutes.toString().padStart(2, "0")} :{" "}
        {seconds.toString().padStart(2, "0")} :{" "}
        {miliseconds.toString().padStart(2, "0")}
      </p>
      <div className="watch-buttons">
        <button className="watch-button" onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="watch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
