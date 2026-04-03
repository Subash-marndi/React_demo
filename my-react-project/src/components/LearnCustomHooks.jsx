import React from 'react'
import useCounter from '../hooks/useCounter'

const LearnCustomHooks = () => {
    const {count , increment , decrement , reset} = useCounter(0)
  return (
    <>
    <h1> Custom Hooks</h1>
    <h2>count :{count}</h2>
    <button onClick={increment}>Increment</button>
    <br />
    <button onClick={decrement}>decrement</button>
    <br />
    <button onClick={reset}>Reset</button>
    
    </>
  )
}

export default LearnCustomHooks