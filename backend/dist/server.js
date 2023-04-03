const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});
io.on('connection', (socket) => {
    console.log("A user connected");
});
server.listen(8000, () => {
    console.log("Listening on port 8000");
});
//# sourceMappingURL=server.js.map