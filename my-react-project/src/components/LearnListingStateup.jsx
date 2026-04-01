import React from 'react'

const LearnListingStateup = (props) => {
    const handelClick = () => {
        let stock = 'Tata' //pass this 
        props.getStock(stock)

    }
  return (
    
    <>
    <h2>Listing State Up </h2>
    <button onClick = {handelClick}>click here</button>
    </>
  )
}

export default LearnListingStateup