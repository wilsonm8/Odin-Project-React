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

function Button({text = "Click Me!", colour = "blue", fontSize =12, handleClick}){
  const buttonStyle = {
    color: colour,
    fontSize: fontSize + "px"
  };
  return (
    <button onClick={handleClick} style = {buttonStyle}>{text}</button>
  );
}

function App() {
  //const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const handleButtonClick = (url) =>{
    window.location.href = url;
  }
  return (
    <div>
      <Button handleClick = {() => handleButtonClick("https://google.com")}/>
    </div>
  )
}

export default App;
