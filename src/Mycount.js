import React, { useState } from 'react'

import { Button, Buttoner } from './components/Button.style';

//usestae

const Mycount = () => {

    const [counter, setCounter] = useState(0);
    const [showtext, setShowtest] = useState (true);

    const add = () => {
        setCounter (counter + 1)
    }

    const sub = () => {
        setCounter (counter - 1)
    }

    const text = () => {
        setCounter (counter +1);
        setShowtest (!showtext);
    }
 return (
    <section className='container mx-auto max-w-[1240px] border-2'> 
    <div className=" px-4 flex pt-4 text-xl text-red-600">
        

        <button className="bg-red-500 w-20 rounded-lg " onClick={add}> add </button>
        <h1 className=""> 
          {counter}
        </h1>
         <button className="bg-blue-400  w-20 rounded-lg " onClick={sub}> sub </button>

        <button className="bg-yellow-400  w-20 rounded-lg " onClick={text}> click me </button>

        <h1 className='ml-10 text-blue-400'> 
                  {showtext && <p> Even number </p> || <p> odd number </p> }
        </h1>
         
    </div>

    <div className='mt-10 flex space-x-9'> 
         <Button> tailwind button </Button> 
        <Buttoner backgroundColor="yellow"> normal css   </Buttoner>
    </div>
    </section>
  );
}

export default Mycount