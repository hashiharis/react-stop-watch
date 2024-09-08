import { useState } from "react";
import { Stopwatch } from "./Stopwatch";
import "./watchcontainer.css";
import { Timer } from "./Timer";
import { CgSandClock } from "react-icons/cg";
import { IoStopwatchOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
export const WatchContainer = () => {
  const [isTimer, setIsTimer] = useState(false);

  return (
    <div className="stopwatch-container">
      <div className="option-buttons">
        <button className={`${isTimer?"selected":""}`} onClick={()=>setIsTimer(true)}>{isTimer?<TiTick />:<CgSandClock/>}Timer</button>
        <button  className={`${isTimer?"":"selected"}`}onClick={()=>setIsTimer(false)}>{isTimer?<IoStopwatchOutline />:<TiTick />}Stopwatch</button>
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
