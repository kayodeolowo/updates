import {AiOutlineClose, AiOutlineMenuUnfold}  from 'react-icons/ai'
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Header() {
  const [open, setOpen] = useState(false); 
  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <div className='h-14 fixed flex items-center justify-between px-5 top-0 left-0 right-0 z-10 bg-red-600'>
      <h1> LOGO </h1>

      <div className='model-links hidden lg:flex items-center font-semibold uppercase flex-nowrap '>
       <ul> 
         <li> Home </li>
         <li> Features </li>
         <li> About </li>
       </ul>
      </div>

    
    

    {/* mobile menu */}
      <div className=' flex items-center font-semibold uppercase'>
        <div onClick={() => setOpen(!open)} className=' lg:hidden cursor-pointer z-30'>
          {open ? <AiOutlineClose/> :  <AiOutlineMenuUnfold/>}
        </div>
      </div>

      <ul onClick={handleNav}
        className={`fixed top-14 bottom-0 right-0 h-full bg-blue-400 z-20 w-full list-none p-5 flex flex-col transition-all duration-500 ease-in  ${
          open ? 'opacity-100' : ' -right-80 opacity-0'
        }`}
      >
       
        <Link to='/shop'> <li> shop </li>  </Link>
        <Link to='/shop'> <li> about </li>  </Link>
        <Link to='/shop'> <li> Features </li>  </Link>
      </ul>
    </div>
  );
}

export default Header;