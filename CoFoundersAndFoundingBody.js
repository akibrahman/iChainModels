import mongoose from "mongoose";

const CoFoundersAndFoundingBodySchema = new mongoose.Schema({
  name: { type: String, default: "" },
  image: { type: String, default: "" },
  designation: { type: String, default: "" },
  createdAt: { type: String, default: "" },
});

export default mongoose.models.CoFoundersAndFoundingBody ||
  mongoose.model("CoFoundersAndFoundingBody", CoFoundersAndFoundingBodySchema);
