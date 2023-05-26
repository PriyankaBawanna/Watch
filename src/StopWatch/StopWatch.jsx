import React, { useState, useEffect } from "react";
const StopWatch = () => {
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    let mili;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => {
      clearInterval(timer);
      clearInterval(mili);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };
  const calculateTime = () => {
    let seconds = Math.floor((time / 1000) % 60);
    let milliseconds = Math.floor((time % 1000) / 10);

    seconds = seconds.toString().padStart(2, "0");
    milliseconds = milliseconds.toString().padStart(2, "0");

    return `${seconds}.${milliseconds}`;
  };
  return (
    <>
      {calculateTime()}
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
export default StopWatch;
