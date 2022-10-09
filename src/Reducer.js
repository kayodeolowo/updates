import React, { useReducer } from 'react'
import { Button } from './components/Button.style'



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
    <div className='container mx-auto px-4 mt-4 flex '>


            <Button onClick={adding}>  Add numbers </Button>
            <h1> {state.count}  </h1>
            <Button onClick={subt}> Sub </Button>
    </div>
  )
}

export default Reducer