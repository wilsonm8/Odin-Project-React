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

function Button({ text = "Click Me!", colour = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: colour,
    fontSize: fontSize + "px"
  };
  return (
    <button onClick={handleClick} style={buttonStyle}>{text}</button>
  );
}

function App() {
  //const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const colours = ["blue", "green", "yellow"];
  const [backgroundColour, setBackgroundColour] = useState(colours[0]);
 
  document.body.style.backgroundColor = backgroundColour;
  /*const handleButtonClick = (url) => {
    window.location.href = url;
  }*/
 const onButtonClick = (colour) =>{
  setBackgroundColour(colour);
 }

  return (
    colours.map((colour) => (
      <button
        type="button"
        key={colour}
        onClick={() => onButtonClick(colour)}
      >
        {colour}
      </button>
    ))
  );
}

export default App;
