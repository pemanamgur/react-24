import { useState } from 'react'

function App() {
  
  // let counter = 0 ;
       let [counter , setCounter] =   useState(0);
  
  function addValue(){
    console.log("button is clicked",counter);
    if(counter < 20){
      setCounter(counter + 1);
    }
    // counter = counter + 1;
  }

  function subValue(){
    console.log("value is subtracted",counter);
    if(counter  >= 1 ){
      counter = counter - 1 ;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Counter Game</h1>
      <button onClick={addValue}>click to add</button>
      <button onClick={subValue}>click to subtract</button>
      <div>The value is {counter}</div>
      <div>Can i manipulate this number {counter}</div>
    </>
  )
}

export default App;
