import {useContext} from 'react'
import { StockContext,UserContext  } from '../App'

const LearnUseContext = () => {
    const stockData = useContext(StockContext)
    const userData = useContext(UserContext)
  return (
    <>
        
        <h2>User Name : {userData.name}</h2>
        <h2>Is Logged in? : {userData.Is_logged}</h2>
        <h2>Children C (Stock name): {stockData.stock}</h2>


    </ >
  )
}

export default LearnUseContext