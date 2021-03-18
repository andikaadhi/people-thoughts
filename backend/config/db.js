const mongoose = require('mongoose');
const { Schema } = mongoose;
const db = mongoose.createConnection(`mongodb://${process.env.DB_HOST}/people-app`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

module.exports = { db, Schema };