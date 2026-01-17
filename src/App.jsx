import './App.css'
import Chatbox from './components/Chatbox'
import ChatList from './components/ChatList'
import Login from './components/Login'
import NavLinks from './components/NavLinks'
import Register from './components/Register'


function App() {
  

  return (
    <>
    <div className='flex lg:flex-row flex-col items-start w-[100%] h-screen'>
<NavLinks/>
      <ChatList/>
      <Chatbox/>
    </div>
      <div className=' hidden'>
        <Register/>
      <Login/> 
      
      </div>
    </>
  )
}

export default App
