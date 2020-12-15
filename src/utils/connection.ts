import mongoose from 'mongoose';

const dbURL: string = process.env.DB_URL;

mongoose.connect(dbURL, {

})