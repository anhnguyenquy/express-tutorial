import logo from './logo.svg'
import './App.css'
import socketIOClient from 'socket.io-client'
import { useEffect, useState } from 'react'

const Time = () => {
  const [time, setTime] = useState('')
  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_SERVER_ORIGIN)
    console.log('Connected to websocket and started listening to events.')
    socket.on('Time', data => {
      setTime(data)
    })
    return () => {
      socket.off('Time') // Unsubscribes (stops listening) to the event 'Time'.
      console.log('Component <Time /> unmounted; websocket disconnected.')
    }
  }, [])
  return <>{time}</>
}

const App = () => {
  const [showTime, setShowTime] = useState(true)
  console.log(process.env)
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <button onClick={() => { setShowTime(prev => !prev) }}>Toggle</button>
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {
            showTime && <Time />
          }
        </a>
      </header>
    </div>
  )
}

export default App
