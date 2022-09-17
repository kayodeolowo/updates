import React, { useState } from 'react'


const Count = () => {

  const [counter, usecounter] = useState (1)
  const [val, useval] = useState (true)

  const add = () => {

    usecounter (counter + 1)
}

 const sub = () => {

    usecounter = counter - 1

}


  return (
    <div>
      <button onClick={add}> add </button>
        <h1> {counter} </h1>
    </div>
  )
}

export default Count