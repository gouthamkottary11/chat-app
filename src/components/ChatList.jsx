import React, { useEffect, useMemo, useState } from 'react'
import avatar from '/assets/avatar.png'
import { RiMore2Fill } from 'react-icons/ri'
import SearchModal from './SearchModal'
import chatData from '../data/ChatData'
import { formatTimestamp } from '../utils/formatTimeStamp'  

const ChatList = () => {
  const [chat, setchat] = useState([])

  useEffect(() => {
    setchat(chatData)
  
    
  }, [])

  const sortedChats = useMemo(() => {
    return [...chat].sort((a, b) => {
      const aLastSeen = a.users[0]?.lastSeen?.seconds + (a.users[0]?.lastSeen?.nanoseconds || 0) / 1e9;
      const bLastSeen = b.users[0]?.lastSeen?.seconds + (b.users[0]?.lastSeen?.nanoseconds || 0) / 1e9;

      return bLastSeen - aLastSeen;
    });
  }, [chat]);

  return (
    <section className='relative hidden lg:flex flex-col items-start justify-start bg-white h-[100vh] w-[100%] md:w-[600px]'> 
      <header className='flex items-center justify-between w-[100%] lg:border-b border-[#a4b8b8] border-b-1 p-4 sticky md:static top-0 z-[100]'>
        <main className='flex items-center gap-4'> 
          <img src={avatar} alt="" className='w-[44px] h-[44px] object-cover rounded-full' />
          <span>
            <h3 className='font-semibold p-0 text-[#020a02] md:text-[17px]'>{"chatfrik"}</h3>
            <p className='p-0 font-light text-[#3636d6] text-[15px]'>@chatfrik</p>
          </span>
        </main>
        <button className='bg-[#bbd0cc] w-[40px] h-[40px] p-2 flex items-center justify-center rounded-lg'>
          <RiMore2Fill color='#01AA85' className='w-[28px] h-[28px]'/>
        </button>
      </header>
      <div className='w-[100%] mt-[10px] px-5'>
        <header className='flex items-center justify-between'>
          <h3 className='text-[16px] '>Message ({chat?.length||0})</h3>
          <SearchModal/>
        </header>
      </div>
      <main className='flex flex-col items-start mt-[1.5rem] pb-3 w-[100%] overflow-hidden'>
        {sortedChats?.map((chat) => (
          chat?.users?.map((user) => (
          <button key={user?.uid} className='flex justify-between items-start w-[100%] border-b border-b-1 border-[#a4b8b8] px-5 pb-2 pt-2'>
          <div className='flex items-start '>
            <img src={user?.image} alt="" className='w-[40px] h-[40px] object-cover rounded-full mr-4' />
            <span>
              <h2 className='p-0 font-semibold text-[#a3a3a3] text-left text-[17px]'>{user?.fullName}</h2>
              <p className='p-0 font-light text-[#a3a3a3] text-left text-[17px]'>{user?.message}</p>
            </span>
          </div>

          <p className='text-[15px] font-light text-[#a3a3a3]'>{formatTimestamp(user?.lastSeen)}</p>
        </button>
        ))
        ))}
       
      
      </main>
    </section>
  )
}

export default ChatList