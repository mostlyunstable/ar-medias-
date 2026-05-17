"use server";

import { contactSchema } from "../validations";
import { contactRateLimit } from "../rate-limit";
import { headers } from "next/headers";
// import prisma from "../db"; // Assuming a singleton PrismaClient in lib/db.ts
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  try {
    // 1. IP & Rate Limiting (Security Phase)
    const headerList = headers();
    const ip = headerList.get("x-forwarded-for") || "127.0.0.1";
    
    const { success, limit, reset, remaining } = await contactRateLimit.limit(ip);
    
    if (!success) {
      return { 
        error: "Too many inquiries sent from this IP. Please try again later.",
        status: 429 
      };
    }

    // 2. Data Validation & Sanitization
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const validatedData = contactSchema.safeParse(rawData);

    if (!validatedData.success) {
      return { 
        error: "Invalid data provided.", 
        details: validatedData.error.flatten().fieldErrors,
        status: 400 
      };
    }

    const { name, email, message } = validatedData.data;
    const userAgent = headerList.get("user-agent") || "Unknown";
    const country = headerList.get("x-vercel-ip-country") || "Unknown";

    // 3. Database Persistence (Prisma)
    /*
    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        message,
        ipAddress: ip,
        userAgent,
        country,
      }
    });
    */

    // 4. Email Notifications (Resend)
    /*
    await resend.emails.send({
      from: "AR Medias <noreply@armedias.com>",
      to: ["admin@armedias.com"],
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    */

    return { success: true, message: "Your message has been sent successfully!" };

  } catch (error) {
    console.error("[CONTACT_ACTION_ERROR]", error);
    return { error: "An unexpected error occurred. Please try again.", status: 500 };
  }
}
