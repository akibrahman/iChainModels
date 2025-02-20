import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  image: { type: String, default: "" },
  designation: { type: String, default: "" },
  description: { type: String, default: "" },
  github: { type: String, default: "" },
  researchGate: { type: String, default: "" },
  linkedin: { type: String, default: "" },
  createdAt: { type: String, default: "" },
});

export default mongoose.models.Volunteers ||
  mongoose.model("Volunteers", VolunteerSchema);
