import { instagramAuditSchema } from "@/lib/validations";
import { handleSubmission } from "@/lib/handle-submission";
import InstagramAuditRequest from "@/models/InstagramAuditRequest";

export async function POST(req: Request) {
  return handleSubmission(req, instagramAuditSchema, InstagramAuditRequest, (d) => ({
    email: d.email,
    instagramHandle: d.instagramHandle,
  }));
}
