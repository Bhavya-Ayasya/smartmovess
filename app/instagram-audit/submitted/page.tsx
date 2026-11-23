import type { Metadata } from "next";
import { SuccessCard } from "@/components/sections/SuccessCard";

export const metadata: Metadata = {
  title: "Thank You — Audit Request Received",
  robots: { index: false, follow: false },
  alternates: { canonical: "/instagram-audit" },
};

export default function SubmittedPage() {
  return (
    <SuccessCard
      title="Your Instagram Audit Request Has Been Received!"
      body="Thank you for sharing your Instagram profile details. Our team will review your request and follow up with further information."
      backHref="/instagram-audit"
      backLabel="Back to Instagram Audit"
    />
  );
}
