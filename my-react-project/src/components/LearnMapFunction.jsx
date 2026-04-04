import React from 'react'

const LearnMapFunction = () => {
    const name = ['subash','jhon','bob','devid']
  return (
    <> 
    
        <h1><u>Learn Map Function</u></h1>
        <ul>
            {name.map((name , index)=> (
                <li key={index}>{name}</li>
            ))}
        </ul>
    
    </>
  )
}

export default LearnMapFunction