const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/shoppingdb', {
    });

    console.log(`MongoDB Connected=>( ${conn.connection.host}:${conn.connection.port} )`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); 
  }
};

module.exports = connectDB;
