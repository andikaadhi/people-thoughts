const cors = require('cors');

const whitelist = process.env.FRONTEND_HOST;
module.exports = cors({
  credentials: true,
  origin: (origin, callback) => {
    if (whitelist === origin || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
});
