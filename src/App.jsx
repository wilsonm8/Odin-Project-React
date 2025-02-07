import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ListItem(props){
  return <li>{props.animal}</li>
}

function List(props){
  return(
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key = {animal} animal = {animal}/>;
      })}
    </ul>
  );
}
function App() {
 const animals = ["Lion","Cow","Snake","Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals = {animals}/>
    </div>
  )
}

export default App
