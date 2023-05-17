import React, {useState, useEffect} from 'react'
const Counter = () =>{

    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title =`Clicked ${count} times`
    })
    return(
        <div>
            <button value={count} onClick={()=>setCount(count+1)}>Clicked {count} times</button>
        </div>
    )

}
export default Counter