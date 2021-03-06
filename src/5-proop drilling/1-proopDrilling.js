import React, { useState } from 'react';
import { data } from '../data';

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    
      let newPeople=people.filter((person) => person.id !== id);
      setPeople(newPeople);
   
  };
  return (
    <>
      <section>
        <h3>Prop Drilling</h3>
        <List people={people} removePerson={removePerson} />
      </section>
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  console.log(name);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>REMOVE</button>
    </div>
  );
};

export default PropDrilling;