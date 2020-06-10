import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props)=> {
  const [personsState, setPersonState] = useState({    
      persons:[
        {name: 'Anoop', age : 23},
        {name: 'rejin', age : 22}
      ]
  });

  const switchNameHandler = () =>{
    // console.log('clicked');
    setPersonState({
      persons: [
        {name: 'Anoop SD', age : 23},
        {name: 'rejin', age : 26}
      ]
  
    });
  }
     return (
      <div className="App">
       <h1>Hi I am a react app</h1>
       <button onClick = {switchNameHandler}>Click me</button>
       <Person name={personsState.persons[0].name} age = {personsState.persons[0].age}> dickhead </Person>
       <Person name={personsState.persons[1].name} age = {personsState.persons[1].age}> dickhead </Person>
      </div>
    );
  }


export default app;



