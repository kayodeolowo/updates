import React, { useState } from 'react'

const Count = () => {
    const [counter, setCounter] = useState(0)
    const add = () => {
        setCounter (counter + 1)
    }

  return (
    <div>
        <button onClick={add}> add </button>
        <h1> {counter} </h1>
        <button> sub </button>
    </div>
  )
}

export default Count