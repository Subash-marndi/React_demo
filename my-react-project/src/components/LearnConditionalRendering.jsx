import React ,{useState} from 'react'

const LearnConditionalRendering = () => {
    const [isloggedIn , setIsLoggedIn] = useState(false)

    const [status ,setStatus] = useState(true)
  return (
    < >
    <h1>Learn Conditional Rendering</h1>
    {isloggedIn ? (
        <h3>Welcome User</h3>
    ) : (
        <h3>Please log in</h3>
    )}
    {/* Logical and operator */}
    { status && (
        <h2>Show data</h2>
    )}

    </>
  )
}

export default LearnConditionalRendering