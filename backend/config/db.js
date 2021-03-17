const mongoose = require('mongoose');
const { Schema } = mongoose;
const db = mongoose.createConnection('mongodb://localhost/people-app', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

module.exports = { db, Schema };