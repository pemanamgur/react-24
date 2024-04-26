import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

function addValue(){
    //  counter = counter  + 1;
    //  console.log(counter);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter((prevCounter)=> prevCounter + 1);
    setCounter((prevCounter)=> prevCounter + 1);
    setCounter((prevCounter)=> prevCounter + 1);
    setCounter((prevCounter)=> prevCounter + 1);
}

  return (
    <>
     <h1>Counter Interview</h1>
     <button onClick={addValue} >Add</button>
     <p>The value after addition is {counter}</p>
    </>
  )
}

export default App
