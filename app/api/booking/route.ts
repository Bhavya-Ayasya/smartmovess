import { bookingSchema } from "@/lib/validations";
import { handleSubmission } from "@/lib/handle-submission";
import ConsultationBooking from "@/models/ConsultationBooking";

export async function POST(req: Request) {
  return handleSubmission(
    req,
    bookingSchema,
    ConsultationBooking,
    (d) => ({ email: d.email, preferredDate: d.preferredDate, preferredTime: d.preferredTime }),
    "You already have a booking request for that slot. We will confirm it shortly.",
  );
}
