import mongoose, { Schema, type InferSchemaType } from "mongoose";

const schema = new Schema(
  {
    companyName: { type: String, required: true, trim: true },
    contactPerson: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    phone: { type: String, default: "" },
    roleHiringFor: { type: String, required: true, trim: true },
    openings: { type: Number, min: 1 },
    jobDescription: { type: String, default: "" },
    status: { type: String, enum: ["new", "in_review", "contacted", "completed", "rejected"], default: "new", index: true },
  },
  { timestamps: true },
);

export type EmployerInquiryDoc = InferSchemaType<typeof schema>;
export default (mongoose.models.EmployerInquiry as mongoose.Model<EmployerInquiryDoc>) || mongoose.model("EmployerInquiry", schema);
