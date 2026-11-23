import { hiringSchema } from "@/lib/validations";
import { handleSubmission } from "@/lib/handle-submission";
import EmployerInquiry from "@/models/EmployerInquiry";

export async function POST(req: Request) {
  return handleSubmission(req, hiringSchema, EmployerInquiry, (d) => ({
    email: d.email,
    roleHiringFor: d.roleHiringFor,
  }));
}
