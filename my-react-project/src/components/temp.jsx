

const LearnJSX =() =>{
    let stock = 'tesla'
    return (
        <>
        <h2>jsx</h2>
        <h2>price:{20+40}</h2>
        <h2>stock name : {stock}</h2>
        <h2 className='bg-success'>class</h2>
        <h2 className={stock}>Dynamic class </h2>
        </>
    )
}

export default LearnJSX