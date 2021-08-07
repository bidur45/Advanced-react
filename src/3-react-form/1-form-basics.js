import  React, {useState} from 'react'




const FormBasics = ()=>{
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [people,setPeople]= useState([])
    console.log(people);

    const handleSubmit = (e)=>
    {
    e.preventDefault()
    const person = { id: new Date().getTime(),firstName, email, age}
if(firstName&&email&&age){
 setPeople((people)=>{
     return [...people, person]
 })
 setFirstName('')
 setEmail('')
 setAge('')

} 
else{
    console.log('Enter any value')
}
    
    }

    return(
        <section>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
          <label htmlFor="firstname">Name :</label>
          <input type="text" id="firstname" name="firstname" value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>
          <label htmlFor="email">Email :</label>
          <input type="text" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}  ></input>
          <label htmlFor="age">Age :</label>
          <input type="text" id="age" name="age" value={age} onChange={(e)=> setAge(e.target.value)}></input>
            </div>
            <button type='submit'>Add Person</button>

        </form>
        <article>
            {people.map((person)=>{
                const {id,firstName, email, age} = person
                return (
                    <div className='item' key = {id}>
                        <h4>{firstName}</h4>
                        <p>{email}</p>
                        <p>{age}</p>


                    </div>
                )
            } )}

        </article>
        </section>
    )
}

export default FormBasics