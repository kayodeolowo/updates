import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenuGridR } from 'react-icons/cg';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

 


    return (
        <div className="flex flex-col container  md:h-5/6 justify-between  items-start  md:px-4
          text-white font-public z-10 md:pb-10  md:absolute w-1/22 border-2 md:ml-10 "> 
          
        
                    <div className='hidden md:inline' >
                
                       <h1 > KAYODE </h1>
                
                     </div> 

                     <div className='md:flex  '> 
                        <ul className=' text-base hidden   md:flex md:flex-col text-black font-mono space-x-3  '> 
                        
                                <li to='#'  className=' hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >   Home    </li>
                            <li to='#about'  className=' hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >   About    </li>
                            <li to='#skills' className=' hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >    Skills   </li>
                            <li to='#projects' className=' hover:text-[#E0A040]   hover:-translate-x-1 duration-200' >   Projects    </li>
                            <li to='#contact' className=' hover:text-[#E0A040]  hover:-translate-x-1 duration-200' >     Contact  </li>    
                            </ul> 
                     </div>

                      <div className='md:flex md:flex-col hidden '>
                          <button> helo  </button>
                             <button> my name  </button>
                     </div>

                     

                
                            
                       

              
               
            
           

        
            {/* hamburger */} 
            <div   onClick={handleNav} className=' md:hidden z-10 mt-4 ml-2 '> 
            {nav ? <AiOutlineClose className='text-[#E0A040] ' size={32}/> :   <CgMenuGridR className='text-[#E0A040] ' size={32}/>}
              
            </div>


             <div   onClick={handleNav} className={nav ? ' leading-loose text-start text-2xl rounded-lg absolute text-black  left-0     w-1/2 m-auto z-10    flex     bg-white   flex-col' : 'absolute left-[-100%] '}>
              <div > 
                    <ul   className='md:hidden text-xlg font-semibold mt-10 ml-4 font-fira  flex flex-col '>
                       <li   to='#' className='mt-2' >Home</li>
                      <li to='#about'  className='mt-2' >About </li>
                      <li to='#skills' className='mt-2' >Skills</li>
                      <li to='#projects' className='mt-2' >  Projects</li>
                      <li to='#contact' className='mt-2'>Contact  </li>
        </ul> 
        </div>
      </div>
            
        </div>
    )
}

export default Navbar;