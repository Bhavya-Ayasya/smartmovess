export const SITE = {
  name: "SmartMovess Consulting Zone",
  short: "SmartMovess",
  tagline: "Connecting Talent. Building Careers. Empowering Businesses.",
  description:
    "Recruitment and career consulting for employers, students and professionals. Online sessions across India.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Employers", href: "/for-employers" },
  { label: "Students", href: "/for-candidates" },
  { label: "Services", href: "/services" },
  { label: "Internship", href: "/internship" },
  { label: "IG Audit", href: "/instagram-audit" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "For Employers", href: "/for-employers" },
  { label: "For Students", href: "/for-candidates" },
  { label: "Our Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_SERVICES = [
  { label: "Resume & CV Building", href: "/services" },
  { label: "LinkedIn Improvement", href: "/services" },
  { label: "Mock Interviews", href: "/services" },
  { label: "Internship Program", href: "/internship" },
  { label: "Instagram Profile Audit", href: "/instagram-audit" },
] as const;

export const BOOKING_SERVICES = [
  { label: "Resume/CV Building · ₹499", value: "Resume/CV Building" },
  { label: "Resume + LinkedIn Profile · ₹999", value: "Resume + LinkedIn Profile" },
  { label: "Mock Interview Session · ₹499", value: "Mock Interview Session" },
  { label: "Interview Preparation Bundle · ₹999", value: "Interview Preparation Bundle" },
  { label: "Personal Career Consultation · ₹499", value: "Personal Career Consultation" },
  { label: "Internship Readiness Workshop · ₹299 per student", value: "Internship Readiness Workshop" },
] as const;

export const FAQS = [
  {
    q: "Who can use SmartMovess career services?",
    a: "Students, freshers and working professionals who want practical career support.",
  },
  {
    q: "Are consultations available online?",
    a: "Yes. Our consultations and sessions are conducted online and are accessible across India.",
  },
  {
    q: "How do I book a service?",
    a: "Choose a service, pick a date and time, share your details and we will confirm your booking.",
  },
  {
    q: "What is included in resume building?",
    a: "A review of your background and a professionally structured, role-focused resume that presents your skills and experience clearly.",
  },
  {
    q: "Can freshers book mock interviews?",
    a: "Yes. Freshers can book a one-to-one mock interview, practise common questions and get feedback on their answers.",
  },
] as const;

export const INTERNSHIP_DOMAINS = [
  "Web Development",
  "UI/UX Design",
  "Digital Marketing",
  "HR",
  "Other",
] as const;

export const INTERNSHIP_BATCHES = ["Upcoming Batch", "Next Available Batch"] as const;

export const IG_CATEGORIES = [
  "E-commerce",
  "Coaching & Consulting",
  "Personal Brand",
  "Local Business",
  "Professional Services",
  "Education",
  "Other",
] as const;

export const IG_GOALS = [
  "Gain More Followers",
  "Generate More Enquiries",
  "Increase Engagement",
  "Convert Followers Into Customers",
  "Build a Stronger Brand",
] as const;

export const COUNTRIES = ["India", "USA", "Canada", "UK", "UAE", "Other Countries"] as const;

export const CONTACT_ROLES = ["Employer", "Student", "Job Seeker", "Professional"] as const;

export const BOOKING_TIMES = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
] as const;
