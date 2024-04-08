import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Weather from './Weather';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weather />
    </>
  )
}

export default App
