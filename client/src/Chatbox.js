import React, { useState, useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';
import socket from './socket';
import ChatItem from './Chatitem';

function Chatbox({ username, room }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receive-message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  return (
    <Box
      sx={{
        width: '60%',
        margin: '50px auto',
        border: '1px solid gray',
        borderRadius: 4,
        padding: '20px 5px',
        height: 500,
        //  height
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
          // margin
        }}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          // onChange={(e) => {}}
          // itemID
        />
      </div>
    </Box>
  );
}

export default Chatbox;
