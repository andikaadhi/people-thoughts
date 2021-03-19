// express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// config
const { PORT } = require('./config');

// socket
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: process.env.FRONTEND_HOST,
    methods: ["GET", "POST"]
  }
});
app.io = io;

// body parse for http body request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// cors
app.use(require('./config/cors'));
// Log request
app.use(require('./middleware/httpLog'));
// Routes
app.use('/', require('./routes'));
// Error Handling
app.use(require('./middleware/errorHandler'));

io.on('connection', (socket) => {
  socket.emit('hello', 1);
  console.log('a user connected');
});

// LISTEN - start serve
httpServer.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`SERVER LISTEN ON PORT ${PORT}`);
});
