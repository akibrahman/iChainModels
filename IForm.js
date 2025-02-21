import mongoose from "mongoose";

const IFormSchema = new mongoose.Schema({
  Title: { type: String, default: "" },
  subTitle: { type: String, default: "" },
  description: { type: String, default: "" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, required: true },
  isImmortal: { type: Boolean, default: false },
  expiry: { type: String, default: "" },
  isUnique: { type: Boolean, default: false },
  fields: [
    {
      type: {
        type: String,
        enum: ["Text", "Number", "Email", "Image", "Date", "Time"],
        required: true,
      },
      title: { type: String, default: "" },
      isRequired: { type: Boolean, default: false },
    },
  ],
  createdAt: { type: String, default: "" },
});

export default mongoose.models.IForms || mongoose.model("IForms", IFormSchema);
