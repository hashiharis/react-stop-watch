
import { useRef, useState } from 'react';
import './stopwatch.css'
import { TfiControlPause } from "react-icons/tfi";
import { TfiControlPlay } from "react-icons/tfi";
import { VscDebugRestart } from "react-icons/vsc";

export const Stopwatch=()=>{

    const [stopWatchTimer, setStopWatchTimer] = useState(0.00);
    const [isStopWatchTimerClicked, setIsStopWatchTimerClicked] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const stopWatchTimerRef = useRef(null);
   

    const incrementCounter = () => {
        if (!isStopWatchTimerClicked) {
          stopWatchTimerRef.current = setInterval(() => {
            setStopWatchTimer((stopWatchTimer) => stopWatchTimer + 0.01);
          }, 1000);
          setIsStopWatchTimerClicked(
            (isStopWatchTimerClicked) => !isStopWatchTimerClicked
          );
        } else {
          clearInterval(stopWatchTimerRef.current);
          setIsStopWatchTimerClicked(
            (isStopWatchTimerClicked) => !isStopWatchTimerClicked
          );
        }
      };

    return(
        <div className="stopwatch">
            <button className="stopwatch-counter" onClick={()=>{incrementCounter()
                setIsActive(true)
            }}>{stopWatchTimer.toFixed(2)}</button>
            {isActive?(<div className='stopwatch-btns'>
            {isStopWatchTimerClicked?<button onClick={incrementCounter}><TfiControlPause /></button>:<button onClick={incrementCounter}><TfiControlPlay /></button>}
             <button onClick={()=>{
                   clearInterval(stopWatchTimerRef.current)
                   setStopWatchTimer(0.00)
                   setIsStopWatchTimerClicked(false)
                   setIsActive(isActive=>!isActive)
                }}><VscDebugRestart/></button>
            
            </div>): (
                       <div className="click-btn-container">
                    <button id="click-btn" onClick={()=>{
                        incrementCounter()
                        setIsActive(isActive=>!isActive)
                    }}>
                   <TfiControlPlay size="1.5rem"/>
                     </button>
                     </div>
      )}
            
        </div>
    )
}


