// import HelloWorld from "./components/HelloWorld"
// import LearnReact from "./components/LearnReact"
// import LearnJSX from "./components/temp"
// import Learnprops from "./components/Learnprops"
import LearnEvents from "./components/LearnEvents"
import LearnListingStateup from "./components/LearnListingStateup"



function App() {

  //let price = 200
  const getStock = (stock) =>{
    console.log(stock)
  }
  

  return (
    <>
    <h1>App Components</h1>
    {/* <HelloWorld></HelloWorld>
    <LearnReact></LearnReact> */}
    {/* <LearnJSX/> */}
    {/* <Learnprops stock = 'Tata'  price = {price} /> */}
    {/* <LearnEvents /> */}
    <LearnListingStateup getStock = {getStock}/>
    
      

    </>
  )
}

export default App
