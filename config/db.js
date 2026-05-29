import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=Cluster`;

    await mongoose.connect(uri);

    console.log("MongoDB conectado");
    console.log(`Base de datos: ${process.env.MONGO_DB}`);
  } catch (error) {
    console.error("Error MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;