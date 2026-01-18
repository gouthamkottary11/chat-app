import React from 'react'
import avatar from '/assets/avatar.png'
import { RiSendPlaneFill } from 'react-icons/ri'

const Chatbox = () => {

  return (
   <section className='flex flex-col items-start justify-start h-screen w-[100%] bg-[#a8a8e4]'>
    <header className='border-b border-gray-400 w-[100%] h-[82px] m:h-fit p-4 bg-white'>
      <main className='flex items-center gap-3 '> 
        <span>
          <img src={avatar} className='w-11  h-11 object-cover rounded-full' alt="" />
        </span>
        <span>
          <h3 className='font-semibold text-[#000000] text-lg'>klerk</h3>
          <p className='font-light text-[#000000] text-sm'>@klerk</p>
        </span>
      </main>
    </header>

  <main className='custom-scrollbar relative h-[100vh] w-[100%] flex flex-col justify-between'>
    <section className='px-3 pt-5 pb-20 lg:pb-10 overflow-auto h-[80vh]'>
      {/* Messages will be displayed here */}
    </section>
    <div className='sticky lg:bottom-0 bottom-[60px] h-fit p-3 w-[100%]'>
      <form action="" className="flex items-center bg-white h-[45px] w-[100%] px-2 rounded-lg">
        <input type="text" placeholder='Write your message...' className='h-full text-[#2A3D39] outline-none text-[16px] pl-3 pr-[50px] rounded-lg w-[100%]'/>
        <button className='flex items-center justify-center absolute right-3 p-2 rounded-full bg-[#74e3ed] hover:bg-[#b49ae8]'>
          <RiSendPlaneFill/>
        </button>
      </form>
    </div>
  </main>
   </section>
  )
}

export default Chatbox
