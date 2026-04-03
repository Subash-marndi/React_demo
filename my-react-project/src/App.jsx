// import HelloWorld from "./components/HelloWorld"
// import LearnReact from "./components/LearnReact"
// import LearnJSX from "./components/temp"
// import Learnprops from "./components/Learnprops"
import { createContext, useState } from "react"
import ChildrenA from "./components/ChildrenA"
import LearnCounterapp from "./components/LearnCounterapp"
import LearnEvents from "./components/LearnEvents"
import LearnListingStateup from "./components/LearnListingStateup"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
import LearnUseState from "./components/LearnUseState"
import LearnUseContext from "./components/LearnUseContext"

// Create context
const StockContext = createContext()
const UserContext = createContext()

function App() {
  //prop drilling
  //context api
  let stock = 'tata'
  let price = 200
  const  [user ,setUser] = useState({name :'subash' , Is_logged :'Yes'})


  const getStock = (stock) =>{
    console.log(stock)
  }
  

  return (
    <>
    {/* <h1>App Components</h1> */}
    {/* <HelloWorld></HelloWorld>
    <LearnReact></LearnReact> */}
    {/* <LearnJSX/> */}
    {/* <Learnprops stock = 'Tata'  price = {price} /> */}
    {/* <LearnEvents /> */}
    {/* <LearnListingStateup getStock = {getStock}/> */}
    {/* <LearnUseState /> */}
    {/* <LearnCounterapp /> */}
    {/* <LearnUseEffect /> */}
    {/* <LearnUseMemo /> */}

  {/* Providder */}
    <StockContext.Provider value ={{stock ,price}}>
    <UserContext.Provider value ={user}>
    <LearnUseContext  />
    </UserContext.Provider>
    </StockContext.Provider>
    
      

    </>
  )
}

export default App
export {StockContext ,UserContext}
