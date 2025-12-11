const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // ✅ load .env variables

const connectToDb = async () => {
  const mongoUri = process.env.MONGO_URI;
  console.log("Connecting to MongoDB with URI:", mongoUri); // 👈 debugging log

  if (!mongoUri || typeof mongoUri !== 'string') {
    console.error("❌ MONGO_URI is missing or invalid in environment variables");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectToDb;
