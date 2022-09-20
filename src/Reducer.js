import React, { useReducer } from 'react'



const ACTIONS = {
    INCREMENT : 'increment',
    DECREMENT : 'decrement'
}



function reducerFunction  ( state, action)  {
    switch(action.type) {
        case ACTIONS.INCREMENT :
           return {count: state.count + 1 }


            case ACTIONS.DECREMENT :
           return {count: state.count - 1 }

            default :  return state
        
        }
    }
const Reducer = () => {
    const [state, dispatch] = useReducer (reducerFunction, {count : 0} )

    function adding () {
        dispatch ({type:ACTIONS.INCREMENT})
    }

    
    function subt () {
        dispatch ({type:ACTIONS.DECREMENT})
    }


  return (
    <div className='container mx-auto '>


            <button onClick={adding}> Add  </button>
            <h1> {state.count}  </h1>
            <button onClick={subt}> Sub </button>
    </div>
  )
}

export default Reducer