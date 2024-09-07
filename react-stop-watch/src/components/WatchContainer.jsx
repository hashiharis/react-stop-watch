import { useState } from "react";
import { Stopwatch } from "./Stopwatch";
import "./watchcontainer.css";
import { Timer } from "./Timer";
import { IoStopwatchOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
export const WatchContainer = () => {
  const [isTimer, setIsTimer] = useState(false);

  return (
    <div className="stopwatch-container">
      <div className="option-buttons">
        <button onClick={()=>setIsTimer(true)}><IoIosTimer/>Timer</button>
        <button onClick={()=>setIsTimer(false)}><IoStopwatchOutline />Stopwatch</button>
      </div>
      {isTimer ? (
        <div className="counter-container">
          <Timer />
        </div>
      ) : (
        <div className="counter-container">
          <Stopwatch
          />
        </div>
      )}
    </div>
  );
};

// isStopWatchTimerClicked={isStopWatchTimerClicked} setIsStopWatchTimerClicked={setIsStopWatchTimerClicked}
