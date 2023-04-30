import Painting from "../models/painting.js";

export const getPaintings = async (req, res) => {
  try {
    const paintings = await Painting.find();
    res.status(200).json(paintings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
