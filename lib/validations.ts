import { z } from "zod";
import {
  BOOKING_SERVICES,
  BOOKING_TIMES,
  CONTACT_ROLES,
  COUNTRIES,
  IG_CATEGORIES,
  IG_GOALS,
  INTERNSHIP_BATCHES,
  INTERNSHIP_DOMAINS,
} from "./site";

const required = (label: string, max: number) =>
  z.string().trim().min(1, `${label} is required`).max(max, `${label} is too long`);

const optional = (max: number) => z.string().trim().max(max, "Too long").optional().default("");

const email = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, "Email is required")
  .max(254)
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Please enter a valid email address");

const phone = z
  .string()
  .trim()
  .min(1, "Phone number is required")
  .regex(/^\+?[0-9][0-9\s\-()]{6,19}$/, "Please enter a valid phone number")
  .refine((v) => v.replace(/\D/g, "").length >= 8 && v.replace(/\D/g, "").length <= 15, "Please enter a valid phone number");

const optionalPhone = z
  .string()
  .trim()
  .optional()
  .default("")
  .refine((v) => v === "" || (/^\+?[0-9][0-9\s\-()]{6,19}$/.test(v) && v.replace(/\D/g, "").length >= 8), "Please enter a valid phone number");

const oneOf = <T extends readonly string[]>(label: string, values: T) =>
  z
    .string()
    .trim()
    .min(1, `Please select ${label}`)
    .refine((v) => (values as readonly string[]).includes(v), `Please select ${label}`);

/** Honeypot: real users never see or fill this. Bots usually do. */
const honeypot = z.string().max(500).optional().default("");

const WEBSITE_RE = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i;
const IG_RE = /^(?:(?:https?:\/\/)?(?:www\.)?instagram\.com\/)?@?[A-Za-z0-9._]{1,30}\/?(?:\?[^\s]*)?$/i;

export const internshipSchema = z.object({
  fullName: required("Full name", 100),
  email,
  phone,
  college: required("College / university name", 200),
  qualification: required("Education / qualification", 200),
  domain: oneOf("a domain", INTERNSHIP_DOMAINS),
  batch: oneOf("a batch", INTERNSHIP_BATCHES),
  message: optional(1000),
  hp: honeypot,
});

export const instagramAuditSchema = z.object({
  fullName: required("Full name", 100),
  email,
  phone,
  brandName: required("Business / brand name", 150),
  instagramHandle: z
    .string()
    .trim()
    .min(1, "Please enter your Instagram profile URL or username")
    .max(200)
    .regex(IG_RE, "Please enter your Instagram profile URL or username"),
  businessWebsite: z
    .string()
    .trim()
    .max(300)
    .optional()
    .default("")
    .refine((v) => v === "" || WEBSITE_RE.test(v), "Please enter a valid website address"),
  category: oneOf("a category", IG_CATEGORIES),
  goal: oneOf("your main goal", IG_GOALS),
  country: oneOf("a country", COUNTRIES),
  challenge: required("Please describe your current challenge", 1500),
  notes: optional(1500),
  hp: honeypot,
});

export const hiringSchema = z.object({
  companyName: required("Company name", 150),
  contactPerson: required("Contact person", 100),
  email,
  phone: optionalPhone,
  roleHiringFor: required("Role", 150),
  openings: z
    .string()
    .trim()
    .optional()
    .default("")
    .refine((v) => v === "" || (/^\d{1,4}$/.test(v) && Number(v) > 0), "Enter a valid number"),
  jobDescription: optional(2000),
  hp: honeypot,
});

export const contactSchema = z.object({
  fullName: required("Full name", 100),
  email,
  phone: optionalPhone,
  subject: optional(150),
  role: oneOf("who you are", CONTACT_ROLES),
  message: required("Message", 2000),
  hp: honeypot,
});

const today = () => new Date().toISOString().slice(0, 10);

export const bookingSchema = z.object({
  service: oneOf("a service", BOOKING_SERVICES.map((s) => s.value)),
  preferredDate: z
    .string()
    .trim()
    .min(1, "Please choose a date")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please choose a valid date")
    .refine((v) => v >= today(), "Please choose a date in the future"),
  preferredTime: oneOf("a time", BOOKING_TIMES),
  fullName: required("Full name", 100),
  email,
  phone: optionalPhone,
  notes: optional(1500),
  hp: honeypot,
});

export type InternshipInput = z.infer<typeof internshipSchema>;
export type InstagramAuditInput = z.infer<typeof instagramAuditSchema>;
export type HiringInput = z.infer<typeof hiringSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type BookingInput = z.infer<typeof bookingSchema>;
