const mongoose = require('mongodb');

// Connection URI for MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Miren")
// Create a MongoDB client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to retrieve data from MongoDB
async function fetchData() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Access the specific database and collection
    const database = client.db('your_database');
    const collection = database.collection('your_collection');

    // Query to retrieve data (you can customize this query based on your needs)
    const query = {};
    const result = await collection.find(query).toArray();

    // Display the retrieved data
    console.log('Retrieved Data:', result);
  } finally {
    // Close the MongoDB client
    await client.close();
  }
}

// Call the fetchData function
fetchData();
