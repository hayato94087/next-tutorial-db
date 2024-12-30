import type { Prisma } from "@prisma/client";
import { z } from "zod";

import { TodoCreateManyInputSchema } from "../inputTypeSchemas/TodoCreateManyInputSchema";

export const TodoCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TodoCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        TodoCreateManyInputSchema,
        TodoCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as z.ZodType<Prisma.TodoCreateManyAndReturnArgs>;

export default TodoCreateManyAndReturnArgsSchema;
