import mongoose, { Schema, type InferSchemaType } from "mongoose";

const schema = new Schema(
  {
    fullName: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    phone: { type: String, required: true, trim: true },
    brandName: { type: String, required: true, trim: true },
    instagramHandle: { type: String, required: true, trim: true },
    businessWebsite: { type: String, default: "" },
    category: { type: String, required: true, trim: true },
    goal: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    challenge: { type: String, required: true },
    notes: { type: String, default: "" },
    status: { type: String, enum: ["new", "in_review", "contacted", "completed", "rejected"], default: "new", index: true },
  },
  { timestamps: true },
);

export type InstagramAuditRequestDoc = InferSchemaType<typeof schema>;
export default (mongoose.models.InstagramAuditRequest as mongoose.Model<InstagramAuditRequestDoc>) || mongoose.model("InstagramAuditRequest", schema);
