import './App.css';
import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import socket from './socket';
import Chatbox from './Chatbox';

function App() {
  const [isJoinRoom, setIsJoinRoom] = useState(false);

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const onJoinRoom = () => {
    const data = { username, room };
    socket.emit('join-room', data);
    setIsJoinRoom(true);
  };

  return (
    <div className="App">
      <h1 style={{ marginBlock: 7 }}>SOCKET.IO</h1>
      {isJoinRoom ? null : (
        <div>
          <Box>
            <TextField
              sx={{ mr: 2 }}
              id="outlined-basic"
              label="Username"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
              // onChange
            />
            <TextField
              id="outlined-basic"
              label="Room"
              variant="outlined"
              onChange={(e) => setRoom(e.target.value)}
              // onChange
            />
          </Box>
          <Button
            onClick={onJoinRoom}
            variant="outlined"
            sx={{ width: '25%', mt: 2, height: 50 }}
            // onClick
          >
            Join Room
          </Button>
        </div>
      )}
      {isJoinRoom ? (
        <div>
          <Chatbox />
        </div>
      ) : null}
    </div>
  );
}

export default App;
