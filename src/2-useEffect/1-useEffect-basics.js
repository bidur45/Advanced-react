import { useState, useEffect } from "react"

const UseEffectBasics = ()=>{

    const [value,setvalue] = useState(0)
     useEffect (()=>{
      console.log('Inside useEffect')

    }
    )

    console.log("outside useEffect")


return(
    <>
    <h2>value</h2>
    <h2>{value}</h2>
    <button className="btn" onClick={()=> setvalue(value+1)}>Change value</button>
    </>
)

}
export default UseEffectBasics