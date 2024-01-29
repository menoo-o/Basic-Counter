import React, { useState } from 'react';
import './App.css'


function App() {
  const [counter, setCounter] = useState(0);

  const increase = () =>{
    setCounter(counter+1);
  };

  
  const reset = () =>{
    setCounter(0);
  };

  
  const decrease = () =>{
    if(counter >= 1){
      setCounter(counter -1);
    }else{
      console.log('zero reached');
    }
    
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
