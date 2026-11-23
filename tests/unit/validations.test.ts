import { describe, expect, it } from "vitest";
import {
  bookingSchema,
  contactSchema,
  hiringSchema,
  instagramAuditSchema,
  internshipSchema,
} from "@/lib/validations";

const internship = {
  fullName: "Alex Morgan",
  email: "Alex.Morgan@Email.com",
  phone: "+91 90000 00000",
  college: "ABC University",
  qualification: "B.Tech",
  domain: "UI/UX Design",
  batch: "Upcoming Batch",
};

describe("internshipSchema", () => {
  it("accepts a valid application and normalises the email", () => {
    const r = internshipSchema.safeParse(internship);
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.email).toBe("alex.morgan@email.com");
  });

  it("rejects bad email and phone", () => {
    const r = internshipSchema.safeParse({ ...internship, email: "nope", phone: "12" });
    expect(r.success).toBe(false);
  });

  it("rejects a domain that is not in the list", () => {
    expect(internshipSchema.safeParse({ ...internship, domain: "Hacking" }).success).toBe(false);
  });

  it("requires the mandatory fields", () => {
    expect(internshipSchema.safeParse({ ...internship, fullName: "  " }).success).toBe(false);
  });
});

const ig = {
  fullName: "Ig User",
  email: "ig@example.com",
  phone: "+1 555 123 4567",
  brandName: "Brand",
  instagramHandle: "@brand",
  category: "E-commerce",
  goal: "Generate More Enquiries",
  country: "USA",
  challenge: "Reels get views but no enquiries",
};

describe("instagramAuditSchema", () => {
  it("accepts handles and profile URLs", () => {
    for (const h of ["@brand", "brand.name_1", "https://www.instagram.com/brand/", "instagram.com/brand"]) {
      // bare "instagram.com/brand" is also a valid handle-like string
      expect(instagramAuditSchema.safeParse({ ...ig, instagramHandle: h }).success, h).toBe(true);
    }
  });

  it("rejects script-ish handles and websites", () => {
    expect(instagramAuditSchema.safeParse({ ...ig, instagramHandle: "javascript:alert(1)" }).success).toBe(false);
    expect(instagramAuditSchema.safeParse({ ...ig, businessWebsite: "javascript:alert(1)" }).success).toBe(false);
  });

  it("treats website as optional", () => {
    expect(instagramAuditSchema.safeParse({ ...ig, businessWebsite: "" }).success).toBe(true);
    expect(instagramAuditSchema.safeParse({ ...ig, businessWebsite: "www.brand.com" }).success).toBe(true);
  });

  it("restricts country, category and goal to the known lists", () => {
    expect(instagramAuditSchema.safeParse({ ...ig, country: "Atlantis" }).success).toBe(false);
    expect(instagramAuditSchema.safeParse({ ...ig, category: "Nope" }).success).toBe(false);
    expect(instagramAuditSchema.safeParse({ ...ig, goal: "Nope" }).success).toBe(false);
  });
});

describe("hiring / contact / booking", () => {
  it("hiring: openings must be a positive integer when given", () => {
    const base = { companyName: "Acme", contactPerson: "Jo", email: "jo@acme.com", roleHiringFor: "Sales" };
    expect(hiringSchema.safeParse({ ...base, openings: "2" }).success).toBe(true);
    expect(hiringSchema.safeParse({ ...base, openings: "0" }).success).toBe(false);
    expect(hiringSchema.safeParse({ ...base, openings: "abc" }).success).toBe(false);
  });

  it("contact: requires a message and a known role", () => {
    const base = { fullName: "P", email: "p@example.com", role: "Student", message: "Hi" };
    expect(contactSchema.safeParse(base).success).toBe(true);
    expect(contactSchema.safeParse({ ...base, message: "" }).success).toBe(false);
    expect(contactSchema.safeParse({ ...base, role: "Alien" }).success).toBe(false);
  });

  it("booking: rejects past dates and unknown services", () => {
    const base = {
      service: "Resume/CV Building",
      preferredDate: "2999-01-01",
      preferredTime: "10:00 AM",
      fullName: "P",
      email: "p@example.com",
    };
    expect(bookingSchema.safeParse(base).success).toBe(true);
    expect(bookingSchema.safeParse({ ...base, preferredDate: "2020-01-01" }).success).toBe(false);
    expect(bookingSchema.safeParse({ ...base, service: "Free money" }).success).toBe(false);
  });
});
