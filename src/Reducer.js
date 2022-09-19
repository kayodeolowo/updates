import React, { useReducer } from 'react'


const reducerFunction = ( state, action) => {
    switch(action.type) {
        case 'increment' :
            return {
                ...state,
                count: state.count + 1
            }
        


            default :
                return state
            
    }

}

const initialState = {
    count : 0
}



const Reducer = () => {
    const [state, dispatch] = useReducer (reducerFunction, initialState)
  return (
    <div>
        <div> 
            <button onClick={()}> Add </button>
            <h1> {state.type}  </h1> 
            <button> sub </button>
        </div>
    </div>
  )
}

export default Reducer