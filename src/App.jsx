import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './app.css'
import InputBox from './components/InputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p>Hello</p>
     <InputBox />
     <button className='btn btn-primary swap-btn'>swap</button>
     <InputBox />
    </>
  )
}

export default App
