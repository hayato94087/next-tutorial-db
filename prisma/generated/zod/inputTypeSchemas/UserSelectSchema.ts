import type { Prisma } from "@prisma/client";
import { z } from "zod";

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
    password: z.boolean().optional(),
    role: z.boolean().optional(),
  })
  .strict();

export default UserSelectSchema;
