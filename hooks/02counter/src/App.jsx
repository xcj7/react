import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]=useState(0)

const addValue =()=>{
  counter=counter+1
  setCounter(counter)
  /*
  setCounter(prevcounter=>prevcounter+1)// prevcounter can reminds the previous state
  setCounter(prevcounter=>prevcounter+1)
  setCounter(prevcounter=>prevcounter+1)
  setCounter(prevcounter=>prevcounter+1)

  it's called state as a snapshot. 
   When we write setCounter(counter+1) multiple times it is updated only once because in the onclick handler of that render, even after calling setCounter(counter + 1) multiple times the value of the counter is 15, because after our event handler finishes, then React re-renders the component. 
  */
  
  
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
