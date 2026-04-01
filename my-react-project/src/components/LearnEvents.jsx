// import React from 'react'

const LearnEvents = () => {
    const handelClick = () =>{
        console.log('Button Clicked .')
    }
    const handelClickAgain= (param)=>{
        console.log(param)
    }
  return (
    <>

    <button onClick={handelClick}>Click here</button>
    <br />
    <button onClick ={() => handelClickAgain("clicked again")}>Click Again</button>
    </>
  )
}

export default LearnEvents