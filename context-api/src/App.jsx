import React, { useState } from 'react'
import Navbar from './components/navbar'
import {themedatecontext  } from "./context/Themecontext";

const App = () => {
  const [theme,setTheme]=useState('light')

  const changeTheme=()=>{

    if(theme=='dark'){
      setTheme('light')
    }

    if(theme=='light'){
      setTheme('dark')
    }

  }
  return (
    <div>
      <themedatecontext.Provider value={{ theme }}>
        <Navbar />
        <button onClick={changeTheme}>Change theme</button>
      </themedatecontext.Provider>
    </div>
  )
}

export default App
