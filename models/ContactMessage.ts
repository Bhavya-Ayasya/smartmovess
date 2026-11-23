import mongoose, { Schema, type InferSchemaType } from "mongoose";

const schema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    phone: { type: String, default: "" },
    subject: { type: String, default: "" },
    role: { type: String, required: true, enum: ["Employer", "Student", "Job Seeker", "Professional"] },
    message: { type: String, required: true },
    status: { type: String, enum: ["new", "in_review", "contacted", "completed", "rejected"], default: "new", index: true },
  },
  { timestamps: true },
);

export type ContactMessageDoc = InferSchemaType<typeof schema>;
export default (mongoose.models.ContactMessage as mongoose.Model<ContactMessageDoc>) || mongoose.model("ContactMessage", schema);
