import { useEffect, useRef, useState } from "react";
import { TfiControlPause, TfiControlPlay } from "react-icons/tfi";
import { VscDebugRestart } from "react-icons/vsc";
import './timer.css'

export const Timer = () => {
  const [hours,setHours]=useState(0)
  const [minutes,setMinutes]=useState(0)
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isTimerActive,setIsTimerStopped]=useState(false);
  const timerRef=useRef(null)

  const handleChange = (e) => {
    
    const{name,value}=e.target
    if(name==="hours"){
       setHours(value)
    }
    if(name==="minutes"){
      setMinutes(value)
    }
    if(name==="seconds"){
      setSeconds(value)
    }
   
  };

const handleTimer=(hrs,mins,secs)=>{
  
  if(secs>0){
    setSeconds(s=>s-1)
  }
  else if(secs===0 && mins>0){
    setMinutes(m=>m-1)
    setSeconds(59)
  }
  else{
    setHours(h=>h-1)
    setMinutes(59)
    setSeconds(59)
  }
}

  useEffect(()=>{
    if(isTimerActive&&(hours>0||minutes>0||seconds>0)){
        timerRef.current=setInterval(()=>{
          handleTimer(hours,minutes,seconds)
        },1000)
    }
    else if(hours===0&&minutes===0&&seconds===0){
      clearInterval(timerRef.current)
    } 
    return()=>{
        clearInterval(timerRef.current)
    }
  },[isTimerActive,hours,seconds,minutes])

  const handlePlay=()=>{
       
    setIsTimerStopped(isTimerActive=>!isTimerActive)
    
    
  }

  const handleReset=()=>{
    setIsTimerStopped(false)
    setSeconds(0)
    setMinutes(0)
    setHours(0)
    setIsActive(isActive=>!isActive)
  }
    const pausedClass=`${!isTimerActive? "paused":""}`
  const counterPause=`${!isTimerActive?"light-brown":""}`
  return (
    <div className="timer">
       
      { !isActive?(
        <div className="input-btn"><input
        type="number"
        name="hours"
        value={hours}
        onChange={handleChange}
      />
      <input
        type="number"
        name="minutes"
        value={minutes}
        onChange={handleChange}
      />
      <input
        type="number"
        name="seconds"
        value={seconds}
        onChange={handleChange}
      />
      </div>):(  <button className={`timer-counter ${counterPause}`} onClick={()=>{handlePlay()
        setIsActive(true)
   }}>
    {hours<10?`0${hours}`:hours}:{minutes<10?`0${minutes}`:minutes}:{seconds<10?`0${seconds}`:seconds}
   </button>)
}
      {isActive ? (
        <div className="timer-btns">
          <button className={pausedClass} onClick={()=>{handlePlay()
            setIsActive(true)
          }}>{isTimerActive?<TfiControlPause />:<TfiControlPlay />}</button>
          <button className={pausedClass} onClick={handleReset}><VscDebugRestart/></button>
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
