import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]=useState(0)

const addValue =()=>{
  counter=counter+1
  setCounter(counter)
  
  
// let counter1 = 15
//    console.log(counter1,"clicked",Math.random())
  // counter1=counter1 + 1

}

const removeValue=()=>{
setCounter(counter - 1)
}

  return (
    <div>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      
      >Add value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >remove value {counter}</button>
    </div>
  )
}

export default App
