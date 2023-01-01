import { useEffect, useState } from "react";

function Timer({max, speed}){
    const [counter, setCounter] = useState(1);

    useEffect(() =>{
        if(counter < max){
            setTimeout(()=>setCounter(counter + 1), speed);
        }
    },[counter]);

    return(
        <span>
            {counter}
        </span>
    )
}

export default Timer;