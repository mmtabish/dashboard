import React from 'react'
import {useState} from 'react';

const Counter = () => {

    let [counter, setCounter] = useState(2)
     
    function addValue (){
        setCounter (counter+1);
    }

    const removeValue = ()=>{
        setCounter(counter -1);
    }
    

  return (
    <div>
        <h1>Counter to increment and decrement</h1>
        <p>Counter is {counter }</p>
        <button onClick={addValue}>Add value {counter}</button>
        <button onClick={removeValue}>remove value {counter}</button>
    </div>
  )
}

export default Counter