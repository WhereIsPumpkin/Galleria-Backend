import mongoose from "mongoose";

const PaintingSchema = new mongoose.Schema({
  name: String,
  year: Number,
  description: String,
  source: String,
  artist: {
    image: String,
    name: String,
  },
  images: {
    thumbnail: String,
    hero: {
      small: String,
      large: String,
    },
    gallery: String,
  },
});

const Painting = mongoose.model("Painting", PaintingSchema);

export default Painting;
