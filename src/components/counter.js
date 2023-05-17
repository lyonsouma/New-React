import React, {useState} from 'react'
const Counter = () =>{

    const [count, setCount] = useState(0)

    return(
        <div>
            <button value={count} onClick={()=>setCount(count+1)}>Clicked {count} times</button>
        </div>
    )

}
export default Counter