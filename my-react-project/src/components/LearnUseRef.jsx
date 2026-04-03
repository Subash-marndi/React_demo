import React ,{useState ,useRef} from 'react'

const LearnUseRef = () => {
    const [name , setName] = useState('')
    const refElement = useRef('')
    const previousNameRef = useRef('')
    console.log(refElement)

    const clearText = ()=>{
        setName("")
        refElement.current.focus() // manipulate the dom element
    }
    const handelInput = (e) => {
        previousNameRef.current = name
        setName(e.target.value)
    }
  return (
    <>
    <h2>Learn useRef</h2>
    {/* take the dom element here in (ref) */}
    <input ref={refElement} type="text" value = {name} onChange={handelInput} /> 
    <br/>
    <button onClick={clearText}>Clear</button>
    <br />
    <p> Previous name : {previousNameRef.current}</p>
    </>
  )
}

export default LearnUseRef