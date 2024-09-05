
import { useRef, useState } from "react"

export const Timer=()=>{
    const [timerStart,setTimerStart]=useState("00:05:00")



    const handleChange=(e)=>{
    const input= e.target.value
    const arr=input.split(":")
    const lastElement=arr.slice(-1)
    console.log(lastElement)
    // console.log(input)

 setTimerStart()
      
       
};


// const handleKeyDown = (e) => {
//     // Prevent backspace key
//     if (e.key === 'Backspace') {
//       e.preventDefault();
//     }
//   };
   
    return(
        <div className="timer">
            <input placeholder="00:00:00" dir="rtl" inputMode="numeric" maxLength="8" value={timerStart}
            onChange={handleChange}
            />
            <div>
                <button>Pause</button>
                <button>Reset</button>
            </div>
        </div>

    )
}


  