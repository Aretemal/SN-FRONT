import { io } from 'socket.io-client';

const URL = 'http://localhost:1000';
const socket = io(URL);

export default socket;
