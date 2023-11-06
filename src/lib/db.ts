import mongoose from 'mongoose'


const connectDB = () => {
  const MONGODB_URI = process.env.MONGODB_URI;

  try {
    mongoose.connect(`${MONGODB_URI}`)
    console.log('connected');

  } catch (error) {
    console.log(error);

  }
}
export default connectDB