import React from 'react'
import { StockContext } from '../App'

const ChildrenC = () => {
  return (
    <>
        <StockContext.Consumer>
            {
                ({stock , price})=>{
                    return (
                        <>
                        <h2>Children C - {stock} :{price}</h2>
                        </>
                    )
                }
            }
        </StockContext.Consumer>
        
    </ >
  )
}

export default ChildrenC
