import {useState} from 'react'
const useStateObject = () => {
    const [person,setperson]= useState({
        name:'viratkholi',
        age:34,
        role:'bolower'})

        const changeRole= ()=>{
            setperson({...person,role:'batsman'})
        }

 console.log(person)
    return( <>
       
     <div>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.role}</h3>
        </div>
    
    
    
         <button className="btn" onClick={changeRole}> change Message</button>

    
    </>
    )
}


    export default  useStateObject