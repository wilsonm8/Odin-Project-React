import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import {food} from './Food.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Greeting />
    <h1>{food} is my favourite food</h1>
  </StrictMode>,
)
