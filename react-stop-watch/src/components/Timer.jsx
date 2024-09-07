import { useEffect, useRef, useState } from "react";
import { TfiControlPause, TfiControlPlay } from "react-icons/tfi";
import './timer.css'

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isTimerActive,setIsTimerStopped]=useState(false);
  const timerRef=useRef(null)

  const handleChange = (e) => {
    
    setSeconds(e.target.value)
   
  };

  useEffect(()=>{
    if(isTimerActive&&seconds>0){
        timerRef.current=setInterval(()=>{
           setSeconds(seconds=>seconds-1)
        },1000)
    }
    else if(seconds===0){
        clearInterval(timerRef.current)
    }

    return()=>{
        clearInterval(timerRef.current)
    }
  },[isTimerActive,seconds])

  const handlePlay=()=>{
       
    setIsTimerStopped(isTimerActive=>!isTimerActive)
    
    
  }

  const handleReset=()=>{
    setIsTimerStopped(true)
    setSeconds(0)
    setIsActive(isActive=>!isActive)
  }
  return (
    <div className="timer">
        <button className="input-btn" onClick={()=>{handlePlay()
             setIsActive(true)
        }}>
        <input
        type="number"
        name="seconds"
        value={seconds}
        onChange={handleChange}
      />
        </button>
     
      {isActive ? (
        <div className="timer-btns">
          <button onClick={()=>{handlePlay()
            setIsActive(true)
          }}>{isTimerActive?<TfiControlPause />:<TfiControlPlay />}</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <div className="click-container">
          <button onClick={()=>{
            handlePlay()
            setIsActive(isActive=>!isActive)
          }}><TfiControlPlay size="1.5rem"/></button>
            
        </div>
      )}
    </div>
  );
};
