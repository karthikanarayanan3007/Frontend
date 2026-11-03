
import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [number, setNumber] = useState("")
  const [showData, setShowData] = useState(false)
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleAge = (e) => {
    setAge(e.target.value)
  }
  const handleNumber = (e) => {
    setNumber(e.target.value)
  }
  const handleClick = () => {
    setShowData(true)
  }
  return (
    <>
      <div>
        <input type="text"placeholder="Enter Name"onChange={handleName}/>
        <input type="text"placeholder="Enter Age"onChange={handleAge}/>
        <input type="text"placeholder="Enter Number"onChange={handleNumber}/>
        <button onClick={handleClick}>Submit</button>

        {showData && (
          <div>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <h3>Number: {number}</h3>
          </div>
        )}
      </div>
    </>
  )
}

export default App
