import React, {useRef} from "react"
const UseRefHook =()=>{
    const refContainer  =useRef(null)
    
    const handleSubmit = (e)=>{
        e.preventDefault() 
        console.log(refContainer.current.value)
    }
    return(
        <>
        <form className = 'form' onSubmit = {handleSubmit}> 
        <div>
            <h1>UseRefHook</h1>
          <input type = "text" ref = {refContainer}></input>
          <button type="submit">Submit</button>
        </div>
        </form>
        </>

    )
}
export default UseRefHook