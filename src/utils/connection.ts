import mongoose from 'mongoose';

const DB_USER: string = process.env.DB_USER || 'never-stop-learning';
const DB_PASS: string = process.env.DB_PASS || 'nsl123';
const DB_URL: string = process.env.DB_URL || 'nsl.h8rbe.mongodb.net/test';
const DB: string = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_URL}`;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
