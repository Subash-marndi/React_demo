import React ,{useState} from 'react'

const LearnForm = () => {

  // const [firstName ,setFirstname] = useState('')
  // const [lastName , setLastName] = useState('')

  // const handelFirstName = (e) =>{
  //   setFirstname(e.target.value)
  // }
  // const handelLastname = (e) =>{
  //   setLastName(e.target.value)
  // }

  const [formData , setFormData] = useState({
    firstName :'',
    lastName:'',

  })

  const handelChange = (e) => {
    setFormData({...formData,[e.target.name] : e.target.value})
  }

  const handelFormSubmit = (e) => {
    e.preventDefault()
    console.log("form Submitted :" ,formData )
  }
  

  return (
    <>
        <h1>Learn Forms</h1>
        {/* <form action="">
          First Lame : <input type="text"  name = 'first name' onChange={handelFirstName} value={firstName}/>
          <br /><br />
          Last Nmae : <input type="text" name='last name' onChange={handelLastname} value ={lastName}/>
        </form> */}

        <form action="" onSubmit={handelFormSubmit}>
          First Lame : <input type="text"  name = 'firstName' onChange={handelChange} value={formData.firstName}/>
          <br /><br />
          Last Nmae : <input type="text" name='lastName' onChange={handelChange}  value ={formData.lastName}/>
         <br /><br />
          <input type="submit" value="Submit" />
        </form>
    
    </>
  )
}

export default LearnForm