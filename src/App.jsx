import { useState } from 'react'
import "./CSS/styles.css"
import Search from "./components/Search"
import Weather from "./components/Weather"

function App() {
  const [city, setCity] = useState("New York")
  const [showResult, setShowResult] = useState(true)
  function handleSubmit(event) {
    event.preventDefault()
    setShowResult(true)

  }
  function handleChange(event) {
    event.preventDefault()
    setCity(event.target.value)
    setShowResult(false)
  }
  return (
    <div className='App'>
      <Search handleChange={handleChange} handleSubmit={handleSubmit}/>
      {showResult && <Weather city={city}/>}
      
    </div>
  )
}

export default App
