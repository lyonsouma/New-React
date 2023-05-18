import React, {useState} from 'react'
const CounterThreeB = () =>{

    const [count, setCount] = useState(0)

    const Increments = ()=>{
        setCount(previous => previous + 1)
    }

    const Decrements = ()=>{
        setCount(previous => previous - 1)
    }

    const IncrementsFive = ()=>{
        setCount(previous => previous + 5)
    }
   
    return(
        <div>
          <h2>Count :{count}</h2>
          <button onClick={Decrements}>Decrement</button>
          <button onClick={()=>setCount(0)}>Reset</button>
          <button onClick={Increments}>Increment</button>
          <button onClick={IncrementsFive}>Increment 5</button>
        </div>
    )

}
export default CounterThreeB