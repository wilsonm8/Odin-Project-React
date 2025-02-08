import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  if (!props.animals) return <div>Loading...</div>;
  if (props.animals.length === 0) return <div>There are no animals in the list!</div>;

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function Button({text, colour, fontSize}){
  const buttonStyle = {
    color: colour,
    fontSize: fontSize + "px"
  };
  return (
    <button style = {buttonStyle}>{text}</button>
  );
}

function App() {
  //const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <Button text="Click Me!" colour="blue" fontSize={12} />
      <Button text="Don't Click Me!" colour="red" fontSize={12} />
      <Button text="Click Me!" colour="blue" fontSize={20} />
    </div>
  )
}

export default App;
