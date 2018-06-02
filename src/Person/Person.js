import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props)=>{
    const personstyle={
        '@media(min-width: 500px)':{
            width: '450px'
        }
    }
    return (
        <div className="person" style={personstyle}><p className="xx" onClick={props.click}>My name is {props.name} I am {props.age} years old</p>
        <p className="xx">{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        
    )
}

export default Radium(person);
