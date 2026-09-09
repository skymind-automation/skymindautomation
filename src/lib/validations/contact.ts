import { z } from "zod";

export const serviceOptions = [
  "AI Implementation",
  "AI Automation",
  "RAG",
  "AI Agents",
  "AI Engineering",
  "AI Security",
  "AI Red Teaming",
  "AI Consulting",
  "Other",
] as const;

export const companySizeOptions = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "500-1000",
  "1000+",
] as const;

export const budgetRangeOptions = [
  "Under $5k",
  "$5k - $15k",
  "$15k - $50k",
  "$50k - $150k",
  "$150k+",
  "Not sure yet",
] as const;

export const timelineOptions = [
  "ASAP",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "Exploring",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(120, { message: "Name is too long." }),
  company: z
    .string()
    .trim()
    .max(120, { message: "Company name is too long." })
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." })
    .max(254, { message: "Email is too long." }),
  phone: z
    .string()
    .trim()
    .max(40, { message: "Phone number is too long." })
    .regex(/^[+0-9()\-\s.]*$/, { message: "Phone number contains invalid characters." })
    .optional()
    .or(z.literal("")),
  companySize: z.enum(companySizeOptions).optional().or(z.literal("")),
  service: z.enum(serviceOptions).optional().or(z.literal("")),
  budgetRange: z.enum(budgetRangeOptions).optional().or(z.literal("")),
  timeline: z.enum(timelineOptions).optional().or(z.literal("")),
  goal: z
    .string()
    .trim()
    .min(15, { message: "Please tell us a bit more (at least 15 characters)." })
    .max(3000, { message: "Please keep your message under 3000 characters." }),
  currentSystems: z
    .string()
    .trim()
    .max(2000, { message: "Please keep this under 2000 characters." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .max(3000, { message: "Please keep your message under 3000 characters." })
    .optional()
    .or(z.literal("")),
  // Honeypot field — must be empty. Bots tend to fill all fields.
  website: z
    .string()
    .max(0, { message: "Spam detected." })
    .optional()
    .or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function parseContactForm(data: unknown) {
  return contactFormSchema.safeParse(data);
}
