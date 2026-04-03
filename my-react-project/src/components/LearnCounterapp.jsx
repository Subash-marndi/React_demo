import {useState} from 'react'

const LearnCounterapp = () => {
    const [count , setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)

    }
    const decreaseCount = () => {
        setCount(count - 1)
    }
    const resetCount = () =>{
        setCount(0)
    }
        return (
    <>
        <h1><u>Learn Counter App :</u></h1>
        <h2>Count : {count}</h2>
        <button onClick = {increaseCount}>Increase Count</button> <br />
        <button onClick = {decreaseCount}>Decrease Count</button> <br />
        <button onClick={resetCount}>Reset</button>

    </>
  )
}

export default LearnCounterapp