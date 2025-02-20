import mongoose from "mongoose";

const ResearcherSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  image: { type: String, default: "" },
  designation: { type: String, default: "" },
  description: { type: String, default: "" },
  github: { type: String, default: "" },
  researchGate: { type: String, default: "" },
  linkedin: { type: String, default: "" },
  createdAt: { type: String, default: "" },
});

export default mongoose.models.Researchers ||
  mongoose.model("Researchers", ResearcherSchema);
