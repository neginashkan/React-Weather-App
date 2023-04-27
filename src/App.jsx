import { useState } from 'react'
import "./CSS/styles.css"
import Search from "./componets/Search"
import Weather from "./componets/Weather"

function App() {

  return (
    <div className='App'>
      <Search/>
      <Weather />
    </div>
  )
}

export default App
