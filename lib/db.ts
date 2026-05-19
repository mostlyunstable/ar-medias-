import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: any;
};

// If no DATABASE_URL is found, return a dummy object that fails gracefully
// without screaming in the terminal.
export const prisma = process.env.DATABASE_URL
  ? globalForPrisma.prisma ??
    new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    })
  : {
      project: { findMany: async () => { throw new Error("No DB"); } },
      inquiry: { create: async () => { throw new Error("No DB"); } },
      admin: { findUnique: async () => null }
    };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma as PrismaClient;
