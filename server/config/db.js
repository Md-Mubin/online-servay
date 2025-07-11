const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_DATABASE_URL).then(()=>console.log("Database Connected"))

