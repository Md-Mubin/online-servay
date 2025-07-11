const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGO_DATABASE_URL).then(()=>console.log("Database Connected"))