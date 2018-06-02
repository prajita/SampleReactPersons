import React, { Component } from 'react';
import logo from './nc2.png';
import './App.css';
import Person from './Person/Person';
import Radium,{StyleRoot} from 'radium';

class App extends Component {

  state={
    persons:[
      {id:1,name: "Prajita", age: 23},
      {id:2,name: "Asifa", age: 26},
      {id:3,name: "Anita", age: 33}
    ],
    otherState: 'some other value',
    showPersons:  false
  }
  toggleUserHandler = ()=>{
    console.log("clicked!")
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }
  namechangeHandler = (event,id)=>{
    const personIndex  = this.state.persons.findIndex(p=>{
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons:persons})
  }
  deleteUserHandler = (personIndex)=>{
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons: persons})
  }
  render() {
    let persons = null
    const buttonSwitch ={
      backgroundColor: 'darkblue',
      border: 'none',
      color: 'white',
      padding: '15px 32px',
      textDecoration: "none",
      display: "inline-block",
      fontSize: '16px',
      margin: '4px 2px',  
      cursor: "pointer"
    }
    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person click={()=>this.deleteUserHandler(index)} 
                           name={person.name} 
                           age={person.age}
                           key={person.id}
                           changed={(event)=>this.namechangeHandler(event,person.id)}
                           />
          })}
        </div>
      )
      buttonSwitch.backgroundColor = '#017dbb'
    }
    let classes = []
    if(this.state.persons.length <=2){
      classes.push('brown')
    }
    if(this.state.persons.length <=1){
      classes.push('bold')
    }
  
                  
    return (
      <StyleRoot>
      <div className="App">
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my World !</h1>
        </header>
        <h1 className="textSample">Presenting my First React App</h1>
        <p className={classes.join(' ')}>I change my color with the number of persons</p>
        <button style={buttonSwitch} onClick={this.toggleUserHandler}>Switch User</button>
        {persons}
        
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);

// React.createElement('div',{ className="App-header"},React.createElement('h1',null,'Hello!!!Testing with nested create element feature!!!'));
