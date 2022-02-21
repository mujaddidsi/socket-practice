import io from 'socket.io-client';
const socket = io.connect('http://localhost:2022');

export default socket;
