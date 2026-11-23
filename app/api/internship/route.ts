import { internshipSchema } from "@/lib/validations";
import { handleSubmission } from "@/lib/handle-submission";
import InternshipApplication from "@/models/InternshipApplication";

export async function POST(req: Request) {
  return handleSubmission(req, internshipSchema, InternshipApplication, (d) => ({
    email: d.email,
    domain: d.domain,
    batch: d.batch,
  }));
}
