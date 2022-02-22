import { useState, useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';
import socket from './socket';
import ChatItem from './Chatitem';
import moment from 'moment';

function Chatbox({ username, room }) {
  // messages = [ { body : 'rochafi has joined' }, {}, {} .. ]
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState('');

  useEffect(() => {
    socket.on('receive-message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const onSendMessage = () => {
    const message = {
      username,
      room,
      body: messageBody,
      time: moment().format('LT'),
    };
    socket.emit('send-message', message);
  };

  return (
    <Box
      sx={{
        width: '60%',
        margin: '50px auto',
        border: '1px solid gray',
        borderRadius: 4,
        padding: '20px 5px',
        height: 500,
      }}
    >
      {/* Menampilkan pesan */}
      <div style={{ height: 420 }}>
        {messages.map((message) => (
          <ChatItem message={message} />
        ))}
      </div>
      {/* Input pesan */}
      <div
        style={{
          width: '97%',
          display: 'flex',
          margin: '10px auto',
        }}
      >
        <TextField
          sx={{
            width: '80%',
          }}
          id="outlined-basic"
          variant="outlined"
          onChange={(e) => setMessageBody(e.target.value)}
        />
        <Button
          onClick={onSendMessage}
          variant="outlined"
          sx={{
            width: '20%',
            height: 56,
          }}
        >
          Send
        </Button>
      </div>
    </Box>
  );
}

export default Chatbox;
