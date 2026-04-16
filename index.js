import { MongoClient } from 'mongodb';

// MongoDB Atlas connection string (prefer using the MONGODB_URI env var)
const url = process.env.MONGODB_URI || "mongodb+srv://tummyachesurvivor12_db_user:20120710Palika@cluster0.d4rj8in.mongodb.net/?appName=Cluster0";

// Create a single MongoClient instance for reuse across the app
const client = new MongoClient(url);

// Database name
const dbName = "Project_0";

async function connectToDatabase() {
    try {
        // connect (idempotent)
        await client.connect();
        console.log("Connected successfully to MongoDB Atlas");
        const db = client.db(dbName);
        // verify connection with a ping
        await db.command({ ping: 1 });
        console.log("Pinged MongoDB deployment successfully");
        return { client, db };
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
}

function getDb() {
    if (!client || !client.topology) {
        throw new Error("MongoDB client not connected. Call `connectToDatabase()` first.");
    }
    return client.db(dbName);
}

async function closeConnection() {
    await client.close();
    console.log("MongoDB connection closed");
}

export { connectToDatabase, getDb, closeConnection, client, dbName };