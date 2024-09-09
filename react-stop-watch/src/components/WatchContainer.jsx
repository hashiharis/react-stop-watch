import { useState } from "react";
import { Stopwatch } from "./Stopwatch";
import "./watchcontainer.css";
import { Timer } from "./Timer";
import { CgSandClock } from "react-icons/cg";
import { IoStopwatchOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
export const WatchContainer = () => {
  const [isTimer, setIsTimer] = useState(false);
  const [isTimerClicked, setIsTimerClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const paused = `${!isTimerClicked && isActive ? "brown" : ""}`;
  const fontChange = `${!isTimerClicked && isActive ? "light-brown" : ""}`;

  const stopped = `${!isTimerClicked && isActive ? "hover-dark" : ""}`;
  return (
    <div className={`stopwatch-container ${paused}`}>
      <div className={`option-buttons ${paused}`}>
        <button
          className={`${isTimer ? `selected ${stopped}` : ""} ${fontChange}`}
          onClick={() => setIsTimer(true)}
        >
          {isTimer ? <TiTick /> : <CgSandClock />}Timer
        </button>
        <button
          className={`${isTimer ? "" : `selected  ${stopped}`}  ${fontChange}`}
          onClick={() => setIsTimer(false)}
        >
          {isTimer ? <IoStopwatchOutline /> : <TiTick />}Stopwatch
        </button>
      </div>
      {isTimer ? (
        <div className="counter-container">
          <Timer
            isTimerClicked={isTimerClicked}
            setIsTimerClicked={setIsTimerClicked}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
      ) : (
        <div className="counter-container">
          <Stopwatch
            isTimerClicked={isTimerClicked}
            setIsTimerClicked={setIsTimerClicked}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
      )}
    </div>
  );
};

// isStopWatchTimerClicked={isStopWatchTimerClicked} setIsStopWatchTimerClicked={setIsStopWatchTimerClicked}
