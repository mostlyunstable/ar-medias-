// Auth is currently disabled — no admin panel or login system is active.
// This file is a placeholder to prevent import errors from other modules.
// To re-enable authentication, configure NextAuth with your preferred provider.

export const auth = () => null;
export const signIn = () => null;
export const signOut = () => null;
export const handlers = { GET: () => new Response("Not configured"), POST: () => new Response("Not configured") };
