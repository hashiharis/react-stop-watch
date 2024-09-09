import { useRef, useState } from "react";
import "./stopwatch.css";
import { TfiControlPause } from "react-icons/tfi";
import { TfiControlPlay } from "react-icons/tfi";
import { VscDebugRestart } from "react-icons/vsc";

export const Stopwatch = ({
  isTimerClicked,
  setIsTimerClicked,
  isActive,
  setIsActive,
}) => {
  const [stopWatchTimer, setStopWatchTimer] = useState(0.0);
  const stopWatchTimerRef = useRef(null);

  const incrementCounter = () => {
    if (!isTimerClicked) {
      stopWatchTimerRef.current = setInterval(() => {
        setStopWatchTimer((stopWatchTimer) => stopWatchTimer + 0.01);
      }, 1000);
      setIsTimerClicked((isTimerClicked) => !isTimerClicked);
    } else {
      clearInterval(stopWatchTimerRef.current);
      setIsTimerClicked((isTimerClicked) => !isTimerClicked);
    }
  };

  const pausedClass = `${!isTimerClicked ? "paused" : ""}`;
  const counterPause = `${!isTimerClicked && isActive ? "light-brown" : ""}`;

  return (
    <div className="stopwatch">
      <button
        className={`stopwatch-counter ${counterPause}`}
        onClick={() => {
          incrementCounter();
          setIsActive(true);
        }}
      >
        {stopWatchTimer.toFixed(2)}
      </button>
      {isActive ? (
        <div className="stopwatch-btns">
          {isTimerClicked ? (
            <button className={pausedClass} onClick={incrementCounter}>
              <TfiControlPause />
            </button>
          ) : (
            <button className={pausedClass} onClick={incrementCounter}>
              <TfiControlPlay />
            </button>
          )}
          <button
            className={pausedClass}
            onClick={() => {
              clearInterval(stopWatchTimerRef.current);
              setStopWatchTimer(0.0);
              setIsTimerClicked(false);
              setIsActive((isActive) => !isActive);
            }}
          >
            <VscDebugRestart />
          </button>
        </div>
      ) : (
        <div className="click-btn-container">
          <button
            id="click-btn"
            onClick={() => {
              incrementCounter();
              setIsActive((isActive) => !isActive);
            }}
          >
            <TfiControlPlay size="1.5rem" />
          </button>
        </div>
      )}
    </div>
  );
};
