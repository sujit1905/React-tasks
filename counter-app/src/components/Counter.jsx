import React, { useState } from 'react'

function Counter() {
 const [num,setNum]=useState(0)
 function increase(){
    setNum(num+1);
 }
 function decrease(){
    setNum(num-1);
 }
 function increaseby5(){
    setNum(num+5);
 }

  return (
    <div>
        <h1>Counter</h1>
        <h2>{num}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <br />
      <button onClick={increaseby5}>+5</button>
    </div>
  )
}

export default Counter
