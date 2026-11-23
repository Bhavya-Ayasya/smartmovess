import mongoose, { Schema, type InferSchemaType } from "mongoose";

const schema = new Schema(
  {
    fullName: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    phone: { type: String, required: true, trim: true },
    college: { type: String, required: true, trim: true },
    qualification: { type: String, required: true, trim: true },
    domain: { type: String, required: true, trim: true },
    batch: { type: String, required: true, trim: true },
    message: { type: String, default: "" },
    status: { type: String, enum: ["new", "in_review", "contacted", "completed", "rejected"], default: "new", index: true },
  },
  { timestamps: true },
);

export type InternshipApplicationDoc = InferSchemaType<typeof schema>;
export default (mongoose.models.InternshipApplication as mongoose.Model<InternshipApplicationDoc>) || mongoose.model("InternshipApplication", schema);
