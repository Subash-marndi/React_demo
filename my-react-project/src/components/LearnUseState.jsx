import {useState} from 'react'

const LearnUseState = () => {
    const [num ,setNum]= useState(5)
    console.log(num);

    const handelNum =() =>{
        setNum(10)
    }
    //useState with object
    const [stockPrice , setStockPrice]= useState({stock :'tata',price:120}) 
    console.log(stockPrice);

    const handelStock = () => {
        setStockPrice({...stockPrice, price :300})
    }

  return (
    <>
    <div>LearnUseState</div>
    <button onClick = {handelNum}>Click here</button>
    <h2>Number : {num}</h2>
    <hr />
    <h2>{stockPrice.stock} : {stockPrice.price}</h2>
    <button onClick ={handelStock}>Click Here</button>
    

    </>
  )
}

export default LearnUseState