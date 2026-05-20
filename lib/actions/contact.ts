"use server";

import { contactSchema } from "../validations";
import { contactRateLimit } from "../rate-limit";
import { headers } from "next/headers";

// The API Key provided by the user (UUID format -> Web3Forms)
const WEB3FORMS_ACCESS_KEY = "7b8f588d-ee7f-41e4-bcf4-dde6edef1d24";

// Async Background Task: Sends the email to the Gmail account
async function processLeadInBackground(name: string, email: string, message: string) {
  let attempts = 0;
  
  while (attempts < 3) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name,
          email: email,
          message: message,
          subject: `🚀 New Lead Inquiry: ${name}`,
          from_name: "AR Medias Contact System",
          replyto: email,
          botcheck: false
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        console.log("[EMAIL_SUCCESS] Lead sent to Gmail successfully.");
        break;
      } else {
        throw new Error("Web3Forms API rejected the submission.");
      }
    } catch (error) {
      attempts++;
      console.error(`[EMAIL_ERROR] Attempt ${attempts} failed:`, error);
      if (attempts >= 3) {
        console.error("[DEAD_LETTER] Lead completely failed to send:", email);
      }
    }
  }
}

export async function submitContactForm(formData: FormData) {
  try {
    const headerList = headers();
    const ip = headerList.get("x-forwarded-for") || "127.0.0.1";
    
    if (process.env.UPSTASH_REDIS_REST_URL) {
      try {
        const { success } = await contactRateLimit.limit(ip);
        if (!success) {
          return { error: "Too many inquiries. Please try again later.", status: 429 };
        }
      } catch (e) {
        console.error("[RATE_LIMIT_ERROR] Redis connection failed", e);
        // Fail closed to prevent spam floods during outages
        return { error: "Service temporarily unavailable.", status: 503 };
      }
    }

    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const validatedData = contactSchema.safeParse(rawData);
    if (!validatedData.success) {
      return { error: "Invalid data provided.", status: 400 };
    }

    const { name, email, message } = validatedData.data;

    // Await the email delivery to guarantee it sends on Vercel Serverless
    // (Web3Forms is very fast, so this won't block the UI for long).
    await processLeadInBackground(name, email, message);

    return { success: true, message: "Your message has been sent successfully!" };

  } catch (error) {
    console.error("[CONTACT_ACTION_ERROR]", error);
    return { error: "An unexpected error occurred. Please try again.", status: 500 };
  }
}
