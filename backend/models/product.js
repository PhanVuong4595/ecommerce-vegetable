import mongoose from "mongoose";

const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});

export default mongoose.model("Product", schemaProduct);
