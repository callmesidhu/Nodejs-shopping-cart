// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoDB = 'mongodb://localhost:27017/redstore_db'; // Update with your database name
        await mongoose.connect(mongoDB); // Remove the options here
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
