import './stopwatch.css'
import { TfiControlPause } from "react-icons/tfi";
import { TfiControlPlay } from "react-icons/tfi";
import { VscDebugRestart } from "react-icons/vsc";

export const Stopwatch=({stopWatchTimer,incrementCounter,setStopWatchTimer,stopWatchTimerRef,setIsStopWatchTimerClicked,
    isActive, setIsActive
})=>{
    return(
        <div className="stopwatch">
            <button className="stopwatch-counter"onClick={incrementCounter}>{stopWatchTimer.toFixed(2)}</button>
            { isActive&&<div className='stopwatch-btns'>
                <button onClick={incrementCounter}><TfiControlPause /></button>
                <button onClick={()=>{
                   clearInterval(stopWatchTimerRef)
                   setStopWatchTimer(0.00)
                   setIsStopWatchTimerClicked(false)
                   setIsActive(isActive=>!isActive)
                }}><VscDebugRestart/></button>
            </div>}
        </div>
    )
}