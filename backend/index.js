// express
const express = require('express');
const bodyParser = require('body-parser');
// config
const { PORT } = require('./config');

// socket
const http = require('http').Server(app);
const io = require('socket.io')(http);
io.on('connection', (socket) => {
  console.log('a user connected');
});

// app
const app = express();
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
// LISTEN - start serve
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`SERVER LISTEN ON PORT ${PORT}`);
});