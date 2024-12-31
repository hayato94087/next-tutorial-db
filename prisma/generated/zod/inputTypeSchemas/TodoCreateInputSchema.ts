import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TodoCreateInputSchema: z.ZodType<Prisma.TodoCreateInput> = z.object({
  title: z.string(),
  completed: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.TodoCreateInput>;

export default TodoCreateInputSchema;
