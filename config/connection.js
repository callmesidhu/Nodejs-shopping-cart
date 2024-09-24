const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/shoppingdb', {
    });

    console.log(`MongoDB Connected=>( ${conn.connection.host}:${conn.connection.port} )`);
  }
