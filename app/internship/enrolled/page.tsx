import type { Metadata } from "next";
import { SuccessCard } from "@/components/sections/SuccessCard";

export const metadata: Metadata = {
  title: "Thank You — Enrollment Request Received",
  robots: { index: false, follow: false },
  alternates: { canonical: "/internship" },
};

export default function EnrolledPage() {
  return (
    <SuccessCard
      title="Thank You for Your Interest!"
      body="Your internship enrollment request has been submitted successfully. Our team will review your details and share further information about the program."
      backHref="/internship"
      backLabel="Back to Internship Program"
    />
  );
}
