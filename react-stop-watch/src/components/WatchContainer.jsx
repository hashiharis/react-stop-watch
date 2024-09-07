import { useState } from "react";
import { Stopwatch } from "./Stopwatch";
import "./watchcontainer.css";
import { Timer } from "./Timer";
export const WatchContainer = () => {
  const [isTimer, setIsTimer] = useState(false);

  return (
    <div className="stopwatch-container">
      <div className="option-buttons">
        <button onClick={()=>setIsTimer(true)}>Timer</button>
        <button onClick={()=>setIsTimer(false)}>Stopwatch</button>
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
