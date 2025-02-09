import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*
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
*/
/*function Button({ text = "Click Me!", colour = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: colour,
    fontSize: fontSize + "px"
  };
  return (
    <button onClick={handleClick} style={buttonStyle}>{text}</button>
  );
}*/

function Button({ text, colour, onButtonClick }) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    (setCount(count + 1))
    onButtonClick(colour);
  };

  return (
    <button onClick={handleClick} >{text} {count}</button>
  );
}
function App() {
  //const animals = ["Lion", "Cow", "Snake", "Lizard"];
  /*const handleButtonClick = (url) => {
   window.location.href = url;
 }*/
  const colours = ["blue", "green", "black","pink"];
  const [backgroundColour, setBackgroundColour] = useState(colours[0]);

  document.body.style.backgroundColor = backgroundColour;

  const handleButtonClick = (colour) => {
    setBackgroundColour(colour);
  }
  return (
    colours.map((colour) => (
      <Button
        key={colour}
        text={colour}
        colour={colour}
        onButtonClick={handleButtonClick}
      >
      </Button>
    ))
  );
}

export default App;
