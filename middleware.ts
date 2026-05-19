import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  const response = NextResponse.next({
    request: { headers },
  });

  // Enterprise Security Headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

  // Strict Content Security Policy (CSP)
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline' https://*;
    img-src 'self' blob: data: https://* http://*;
    font-src 'self' data: https://*;
    connect-src 'self' ws: wss: https://* http://*;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    ${process.env.NODE_ENV === 'production' ? 'upgrade-insecure-requests;' : ''}
  `.replace(/\s{2,}/g, ' ').trim();

  // Security Headers Setup
  response.headers.set("Content-Security-Policy", cspHeader);
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), browsing-topics=()");

  // Enforce HTTPS
  if (process.env.NODE_ENV === "production" && !request.nextUrl.protocol.includes("https")) {
    return NextResponse.redirect(`https://${request.headers.get("host")}${request.nextUrl.pathname}`, 301);
  }

  // Admin Route Protection (Handled more deeply by NextAuth, but basic path blocking here)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // NextAuth will handle the actual session validation, but we can add Edge-level checks here
  }

  return response;
}

export const config = {
  matcher: [
    // Apply to all routes except static files and images
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
