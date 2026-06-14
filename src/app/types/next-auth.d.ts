import type { Role } from "@prisma/client";

declare module "next-auth" {
  interface User {
    role: Role;
    isVerified: boolean;
  }
}

