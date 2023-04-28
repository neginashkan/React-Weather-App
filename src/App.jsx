import { useState } from 'react'
import "./CSS/styles.css"
import Search from "./components/Search"
import Weather from "./components/Weather"

function App() {

  return (
    <div className='App'>
      <Search/>
      <Weather />
    </div>
  )
}

export default App
