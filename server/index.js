const http = require('http');
const express = require('express');
const app = express();
const port = 2022;
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: ['http://localhost:3000'] },
});

io.on('connection', (socket) => {
  socket.on('join-room', (data) => {
    const { username, room } = data;
    socket.join(room);
  });
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
