import { useRef, useState } from "react";
import { Stopwatch } from "./Stopwatch";
import "./watchcontainer.css";
import { Timer } from "./Timer";
import { TfiControlPlay } from "react-icons/tfi";
export const WatchContainer = () => {
  const [stopWatchTimer, setStopWatchTimer] = useState(0.00);
  const [isStopWatchTimerClicked, setIsStopWatchTimerClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isTimer, setIsTimer] = useState(false);
  const stopWatchTimerRef = useRef(null);

  const incrementCounter = () => {
    if (!isStopWatchTimerClicked) {
      stopWatchTimerRef.current = setInterval(() => {
        setStopWatchTimer((stopWatchTimer) => stopWatchTimer + 0.01);
      }, 1000);
      setIsStopWatchTimerClicked(
        (isStopWatchTimerClicked) => !isStopWatchTimerClicked
      );
      setIsActive((isActive) => !isActive);
    } else {
      clearInterval(stopWatchTimerRef.current);
      setIsStopWatchTimerClicked(
        (isStopWatchTimerClicked) => !isStopWatchTimerClicked
      );
    }
  };

  return (
    <div className="stopwatch-container">
      <div className="option-buttons">
        <button onClick={() => setIsTimer(true)}>Timer</button>
        <button onClick={() => setIsTimer(false)}>Stopwatch</button>
      </div>
      {isTimer ? (
        <div className="counter-container">
          <Timer />
        </div>
      ) : (
        <div className="counter-container">
          <Stopwatch
            stopWatchTimer={stopWatchTimer}
            setStopWatchTimer={setStopWatchTimer}
            incrementCounter={incrementCounter}
            stopWatchTimerRef={stopWatchTimerRef.current}
            setIsStopWatchTimerClicked={setIsStopWatchTimerClicked}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
      )}
      {!isActive && (
        <div className="click-btn-container">
          <button id="click-btn" onClick={incrementCounter}>
          <TfiControlPlay size="1.5rem"/>
          </button>
        </div>
      )}
    </div>
  );
};

// isStopWatchTimerClicked={isStopWatchTimerClicked} setIsStopWatchTimerClicked={setIsStopWatchTimerClicked}
