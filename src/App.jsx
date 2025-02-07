import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const animals = ["Lion","Cow","Snake","Lizard"];
const animalsList = animals.map((animal) => <li key = {animal}>{animal} </li>)
  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animalsList}
      </ul>
    </div>
  )
}

export default App
