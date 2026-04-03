import {useEffect, useState} from 'react'

const LearnUseEffect = () => {
    const [count , setCount] = useState(0)

    const [randomNum , setRandomNum] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }
    const decreaseCount = () => {
        setCount(count - 1)
    }
    const generateRandomNum = () => {
        const randomNum = Math.floor(Math.random() * 100 ) 
        console.log(randomNum)
        setRandomNum(randomNum)
    }
    useEffect(() =>{
        // the logic goes
        console.log("Use Effect is called !");

        //Clenup function 
        return () => {
            console.log("Cleanup function is called");
        }
        
    } ,[count])

  return (
    <>
    <h1><u>Learn useEffect</u> :</h1>
    <h2>Count : {count}</h2>
    <button onClick={increaseCount}>Increase Count</button><br />
    <button onClick={decreaseCount}>Decrease Count</button><br />
    {/* <button onClick={}>Reset</button> */}
<hr/>
    <h2>Random Number : {randomNum}</h2>
    <button onClick={generateRandomNum}>Generate Number</button>

    </>
  )
}

export default LearnUseEffect