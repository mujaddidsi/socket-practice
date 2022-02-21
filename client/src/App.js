import './App.css';
import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import socket from './socket';

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="App">
      <h1 style={{ marginBlock: 7 }}>SOCKET.IO</h1>
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
      <Button variant="outlined" sx={{ width: '25%', mt: 2, height: 50 }}>
        Join Room
      </Button>
    </div>
  );
}

export default App;
