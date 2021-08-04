import  {useState} from "react" 
import  {data} from "../data"

const UseStateArray = ()=> {
  const [friends, setFriends] = useState(data)

const removeItem = (id) => {
    let newFriends= friends.filter((person)=>  person.id !== id)
    setFriends(newFriends)
}
const removeAll = () =>{
    setFriends([])
}

    

    return(
     <>
     {friends.map((friends)=> {
         const {id , name} = friends
            return <div key={id} className='item'>
             <h3>{name}</h3>
            <button type button className="btn" onClick ={() => removeItem(id)}> Removeitem</button>
         </div>
     })}
     <button type="button"  class="btn" onClick = {removeAll}> Remove All</button>
     </>

    )
}




export default UseStateArray
