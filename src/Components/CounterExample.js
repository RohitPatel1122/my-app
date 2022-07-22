import React, { useState } from "react";

function Counter (){
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>{count}</h1>
            <h1 onClick={() => setCount(count+1)}>Increase me !</h1>   
            <h1 onClick={() => setCount(count - 1)}>Decrease me !</h1>
        </div>
        
    )
}

export default Counter