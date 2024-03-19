import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import exp from 'constants';
dotenv.config();

const connectDB = (url:any) => {
    mongoose.connect(url)
    .then(()=>console.log('connected to mongoDB'))
    .catch(()=>console.log('Error connecting to mongoDB'));
}

export default connectDB;