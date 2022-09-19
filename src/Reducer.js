import  { React, useReducer} from 'react'

const reducerFunction = ( state, action) => {
    switch (action.type) {
        case "increment" : 
        return {
            ...state,
            count: state.count + 1

        }

         case 'decrement' : 
        return {
            ...state,
            count: state.count - 1

        }

       
         
        default : {
            return state
        }
    }

};

const initialState = {
    count : 0
}

const Reducer = () => {
   
    const [state, dispatch] = useReducer (reducerFunction, initialState)
  return (
    <div className='mt-10 ml-20'>
        <div className='flex '> 
            <button className='ml-10 bg-blue-400'
             onClick={()=>dispatch({type:"increment"})}> Add </button>

            <h1 className='ml-10'> {state.count} </h1>

            <button className='ml-10 bg-red-500'
             onClick={()=>dispatch({type:"decrement"})}> Sub </button>
        </div>
    </div>
  )
}

export default Reducer