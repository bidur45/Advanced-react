import { useState, useEffect } from "react"

const UseEffectBasics = ()=>{

    const [size, setSize] = useState(window.innerWidth)
 console.log(size)
    const checkSize =()=>{
        setSize(window.innerWidth)
    }
     useEffect (()=>{
        
     window.addEventListener('resize',checkSize)
     return (
         ()=>{
             
         window.removeEventListener('resize',checkSize)
         }
     )
      

    })

    


return(
    <>
    <h2>window</h2>
    <h2>{size}px</h2>
    </>
)

}
export default UseEffectBasics