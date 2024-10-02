import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://crut_next03:HHBKKjqoaeEbHy26@sever3001.lfrm7fg.mongodb.net/crud_db"
    );
    console.log("Connect to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
