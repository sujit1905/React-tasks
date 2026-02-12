import React from 'react'

function Formhandling() {
    const formhandler=(e)=>{
        e.preventDefault()
        console.log("form is submitted.");
        
    }
  return (
    <div>
      <form action="" onSubmit={(e)=>{
        formhandler(e)
      }}>
        <input type="text" placeholder='Enter your name:' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Formhandling
