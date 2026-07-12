const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect(
      "mongodb+srv://yt:h5E1sh3IHyE3I3Dl@cluster0.wnfj6bi.mongodb.net/halley",
    );

    console.log("Database connected");
}

module.exports = connectDB;