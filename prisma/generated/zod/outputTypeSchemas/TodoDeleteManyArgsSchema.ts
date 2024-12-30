import type { Prisma } from "@prisma/client";
import { z } from "zod";

import { TodoWhereInputSchema } from "../inputTypeSchemas/TodoWhereInputSchema";

export const TodoDeleteManyArgsSchema: z.ZodType<Prisma.TodoDeleteManyArgs> = z
  .object({
    where: TodoWhereInputSchema.optional(),
  })
  .strict() as z.ZodType<Prisma.TodoDeleteManyArgs>;

export default TodoDeleteManyArgsSchema;
