import React from 'react'
import logo from '/assets/logo.png'
import { RiArrowDownSFill, RiBardLine, RiChatAiLine, RiFile4Line, RiFolderUserLine, RiNavigationLine, RiShutDownLine } from "react-icons/ri";

const NavLinks = () => {
  return (
   <section className='sticky lg:static top-0 flex items-center lg:items-start lg:justify-start h-[7vh] lg:h-[100vh] w-[100%] lg:w-[100px] py-8 lg:py-0 bg-[#01aa85]'>
    <main className='flex lg:flex-col items-center lg:gap-10 justify-between lg:p-0 w-[100%]'> 
      <div className='sticky top-0 flex items-start justify-center lg:border-b border-[#a4b8b8] border-b-1 lg:w-[100%] p-3'>
        <span className='flex items-center justify-center '>
          <img src={logo} className='w-[56px] h-[52px] object-contain bg-white rounded-lg' />
        </span>
      </div>
      <ul className='flex lg:flex-col flex-row items-center justify-center gap-8 md:gap-10 px-2 md:px-0'>
        <li>
          <button className='lg:text-[28px] text-[22px] cursor-pointer'>
            <RiChatAiLine />
          </button>
        </li>
         <li>
          <button className='lg:text-[28px] text-[22px] cursor-pointer'>
            <RiFolderUserLine />
          </button>
        </li>
         <li>
          <button className='lg:text-[28px] text-[22px] cursor-pointer'>
            <RiNavigationLine />
          </button>
        </li>
         <li>
          <button className='lg:text-[28px] text-[22px] cursor-pointer'>
            <RiFile4Line />
          </button>
        </li>
         <li>
          <button className='lg:text-[28px] text-[22px] cursor-pointer'>
            <RiBardLine />
          </button>
        </li>
         <li>
          <button className='lg:text-[28px] text-[22px] cursor-pointer'>
            <RiShutDownLine />
          </button>
        </li>
        
          <button className='block lg:hidden lg:text-[28px] text-[22px] cursor-pointer'>
            <RiArrowDownSFill />
          </button>
        
      </ul>
    </main>
   </section>
  )
}

export default NavLinks
