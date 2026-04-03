import {useState ,useMemo} from 'react'

const LearnUseMemo = () => {
    const [count ,setCount] = useState(0)
    const [number , setNumber] = useState(10000)

    const increaseCount = () => {
        if(count === 10){
            setNumber(99999999)
        }
        setCount(count + 1)
    }
    // const sumOfNumber = () => {
    //     let sum = 0 ;
    //     for(let i = 1 ; i<= number ; i++){
    //         //sum = sum + i ;
    //         sum += i ;
    //     }
    //     return sum ;
    // }

    // Use memo {import , useMemo}
    const sumOfNumber = useMemo(() =>{
        let sum = 0 ;
        for(let i = 1 ; i<= number ; i++){
            sum += i ;
        }
        return sum ;
    } , [number])

    console.log(`sum of number from 1 to  ${number} :` ,sumOfNumber);
  return (
    <>
    <h1><b>LearnUseMemo</b> :</h1>
    <h2>Count : {count}</h2>
    <button onClick={increaseCount}>Increase Count</button>
    </>
  )
}

export default LearnUseMemo