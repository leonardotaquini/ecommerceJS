import mongoose from 'mongoose';
import { envConfig } from './enviroments.js';
const { MONGO_URI } = envConfig;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.db.databaseName}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
