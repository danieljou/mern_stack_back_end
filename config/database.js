import mongoose from "mongoose";

const connectDatabase = async () => { 
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to the mongoDB database');
    } catch (error) {
        console.log(`Connection to database failed  with error: ${error}`);
        process.exit(1)
    }
}
export default connectDatabase