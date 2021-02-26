import React, { useState, useEffect, useRef } from 'react'
import firebase from 'firebase/app'
import { Button, FormControl, InputLabel, Input, IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import './App.css'
import db from './firebase'
import Message from "./components/Message"

function App() {
  const [input, setInput] = useState('')
  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState([])

  const messageEndListRef = useRef()
  const scrollBehavior = useRef('auto')

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
      messageEndListRef.current.scrollIntoView({ block: 'end', behavior: scrollBehavior.current})
      scrollBehavior.current = 'smooth'
    })
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, []);

  const sendMessage = (event) => {
    event.preventDefault()

    db.collection('messages').add({
        username: username,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
    setInput('')
  }

  return (
    <div className='app'>
      <div className='app__welcome'>
        <img src='https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=80&h=80'/>
        <h1>Facebook Messenger</h1>
        <h2>Welcome {username}</h2>
      </div>

      <div className='app__messageList'>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
        <div ref={messageEndListRef} />
      </div>

      <div className='app__input'>
        <form>
          <FormControl fullWidth={true}>
            <InputLabel>Enter a message...</InputLabel>
            <Input value={input} onChange={event => setInput(event.target.value)} autoFocus={true} />
          </FormControl>

          <IconButton color='primary' type='submit' onClick={sendMessage} disabled={!input}>
            <SendIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default App;
