import React, { useState } from 'react'

function Twowaybinding() {
    const [title,setTitle]=useState("")
   
    const submitting=(e)=>{
        e.preventDefault();
        console.log('Form is submit by', title)
    }
  return (
    <div>
      <form action="" onSubmit={(e)=>{
            submitting(e)
        }}>
        <input type="text" name="" id="" placeholder='Enter your name:' value={title} onChange={(e)=>{
            setTitle(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Twowaybinding
