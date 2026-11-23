import mongoose, { Schema, type InferSchemaType } from "mongoose";

const schema = new Schema(
  {
    service: { type: String, required: true, trim: true },
    preferredDate: { type: String, required: true },
    preferredTime: { type: String, required: true },
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    phone: { type: String, default: "" },
    notes: { type: String, default: "" },
    status: { type: String, enum: ["new", "in_review", "contacted", "completed", "rejected"], default: "new", index: true },
  },
  { timestamps: true },
);

export type ConsultationBookingDoc = InferSchemaType<typeof schema>;
export default (mongoose.models.ConsultationBooking as mongoose.Model<ConsultationBookingDoc>) || mongoose.model("ConsultationBooking", schema);
