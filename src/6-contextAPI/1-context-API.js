import React, { useState , useContext } from 'react';
import { data } from '../data';
const personContext = React.createContext()  
const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    
      let newPeople=people.filter((person) => person.id !== id);
      setPeople(newPeople);
   
  };
  return (
    <>
      <personContext.Provider value = {{removePerson, people}} >
        <h3>Context API</h3>
        <List  />
      </personContext.Provider>
    </>
  );
};

const List = () => {
    const {people}  = useContext(personContext)
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
           
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name}) => {
    const {removePerson} = useContext(personContext)
  
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>REMOVE</button>
    </div>
  );
};

export default ContextAPI;