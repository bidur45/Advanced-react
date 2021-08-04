import {useState} from 'react'
const UseStateCounter= ()=>{
    const [value,setvalue] = useState(0)

    const increaseValue= ()=>{
        setTimeout(()=>{
            setvalue((prevState) =>{
                return prevState+1
            })
        },2000)
        
    }
    const decreaseValue= ()=>{
        setTimeout(()=>{
            setvalue((prevState)=>
            {
                return prevState-1
            })
        },3000)
    }


    return(
        <>
          <h2>Counter</h2>
          <h2>{value}</h2>
          <button className= "btn" onClick={increaseValue}>increase</button>
          <button className= "btn"onClick={()=> setvalue(0)}>reset</button>          
          <button className= "btn" onClick={decreaseValue}>decrease</button>


        </>
    )

}





export default UseStateCounter