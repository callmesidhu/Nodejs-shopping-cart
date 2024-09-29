const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Database Name
const dbName = 'redstore_db';

async function connectToMongoDB() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    console.log('Connected successfully to MongoDB server');
    
    // Specify the database to use
    const db = client.db(dbName);

    // Example: Inserting a document
    const collection = db.collection('myCollection');
    const result = await collection.insertOne({ name: 'John Doe', age: 25 });
    console.log('Document inserted:', result.insertedId);

    // Example: Querying the database
    const users = await collection.find({}).toArray();
    console.log('Users:', users);

  } catch (err) {
    console.error(err);
  } finally {
    // Ensure the client closes
    await client.close();
  }
}

connectToMongoDB();
