import './App.css'
import Chatbox from './components/Chatbox'
import ChatList from './components/ChatList'
import Login from './components/Login'
import NavLinks from './components/NavLinks'
import Register from './components/Register'


function App() {
  

  return (
    <>
      <NavLinks/>
      <ChatList/>
      <Chatbox/>
      <Login/>
      <Register/>
    </>
  )
}

export default App
