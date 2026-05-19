"use server";

import { contactSchema } from "../validations";
import { contactRateLimit } from "../rate-limit";
import { headers } from "next/headers";
import { unstable_after as after } from "next/server";

export const runtime = "edge"; // Run on Vercel Edge for 50ms cold starts

// The API Key provided by the user (UUID format -> Web3Forms)
const WEB3FORMS_ACCESS_KEY = "7b8f588d-ee7f-41e4-bcf4-dde6edef1d24";

// Async Background Task: Sends the email to the Gmail account
async function processLeadInBackground(name: string, email: string, message: string) {
  let attempts = 0;
  
  while (attempts < 3) {
    try {
      // "Mail Jaaye": Sends the lead data to the Admin's Gmail via Web3Forms
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
          replyto: email, // Admin can click "Reply" in Gmail and it goes to the user
          // Custom HTML design for the Gmail inbox
          botcheck: false
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        console.log("[EMAIL_SUCCESS] Lead sent to Gmail successfully.");
        break; // Exit retry loop
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
        console.warn("[RATE_LIMIT_WARNING] Upstash Redis is misconfigured or missing.");
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

    // Instantly return success to the UI. Defer the Email dispatch.
    // "Mail Aaye": User gets instant success state on the website.
    after(() => {
      processLeadInBackground(name, email, message);
    });

    return { success: true, message: "Your message has been sent successfully!" };

  } catch (error) {
    console.error("[CONTACT_ACTION_ERROR]", error);
    return { error: "An unexpected error occurred. Please try again.", status: 500 };
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
        console.warn("[RATE_LIMIT_WARNING] Upstash Redis is misconfigured or missing.");
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

    // Instantly return success to the UI. Defer the heavy AI processing and Email dispatch.
    after(() => {
      processLeadInBackground(name, email, message);
    });

    return { success: true, message: "Your message has been sent successfully!" };

  } catch (error) {
    console.error("[CONTACT_ACTION_ERROR]", error);
    return { error: "An unexpected error occurred. Please try again.", status: 500 };
  }
}
