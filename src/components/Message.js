import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core'
import './Message.css'

const Message = ({ username, message }) => {
  const isUser = username === message.username
  const messageUsername = message.username ? message.username : 'Guest'

  return (
    <Card className={`message__card ${isUser ? 'message__card--user' : 'message__card--other'}`}>
      <CardContent>
        <Typography variant='subtitle1' align={isUser ? 'right' : 'left'} component='h3'>
          { isUser ? message.message : `${messageUsername}: ${message.message}` }
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Message
