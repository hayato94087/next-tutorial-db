import type { Prisma } from "@prisma/client";
import { z } from "zod";

export const TodoSelectSchema: z.ZodType<Prisma.TodoSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    completed: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict();

export default TodoSelectSchema;
