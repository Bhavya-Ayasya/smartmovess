import { contactSchema } from "@/lib/validations";
import { handleSubmission } from "@/lib/handle-submission";
import ContactMessage from "@/models/ContactMessage";

export async function POST(req: Request) {
  return handleSubmission(req, contactSchema, ContactMessage, (d) => ({
    email: d.email,
    message: d.message,
  }));
}
