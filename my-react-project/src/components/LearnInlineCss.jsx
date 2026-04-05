import React from 'react'
import '../assets/css/style.css'

const LearnInlineCss = () => {

    const styleObject = {
        container : {
            backgroundColor : 'red',
            height : '100px',
            width :'100px'

        },
        h1Text :{
            sontSize :'30px',
            color :'green'
        }

    }
  return (
    < >
    <style>
        {`
        .container{
                background-color : #409fbc;
                height:100px;
                width :100px;

        }
        `}
    </style>
    
        <h1 style={styleObject.h1Text} ><u>Learn Inline Css</u></h1>

    <p style={{fontSize:'20px', fontWeight:650 , color:'blue'}}>Hello World</p>
    
    <div style={styleObject.container}>
    
    </div>
    <hr />
     <h1>Internal css</h1>
     <div className='container'></div>


     <hr />
      <h1>External css</h1>
      <div className='bluebox'>

      </div>
      <h2 className='bluetext'>Blue Text</h2>
    </>
  )
}

export default LearnInlineCss