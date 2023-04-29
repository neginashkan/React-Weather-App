import { useState } from 'react'
import "./CSS/styles.css"
import Search from "./components/Search"
import Weather from "./components/Weather"

function App() {

  return (
    <div className='App'>
      <Search/>
      <Weather />
      <div className='open-source-code'><a href="https://github.com/neginashkan/React-Weather-App" target="_blank" rel="noopener noreferrer">open source code</a> by Negin ashkan</div>
    </div>
  )
}

export default App
