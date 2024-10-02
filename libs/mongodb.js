import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://CRUD-NEXT02:zPB68i7kf8jqEcZO@cluster0.i6gto83.mongodb.net/crud_db"
    );
    console.log("Connect to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
