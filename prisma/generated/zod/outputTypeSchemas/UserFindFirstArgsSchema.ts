import type { Prisma } from "@prisma/client";
import { z } from "zod";

import { UserOrderByWithRelationInputSchema } from "../inputTypeSchemas/UserOrderByWithRelationInputSchema";
import { UserScalarFieldEnumSchema } from "../inputTypeSchemas/UserScalarFieldEnumSchema";
import { UserWhereInputSchema } from "../inputTypeSchemas/UserWhereInputSchema";
import { UserWhereUniqueInputSchema } from "../inputTypeSchemas/UserWhereUniqueInputSchema";

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
    password: z.boolean().optional(),
    role: z.boolean().optional(),
  })
  .strict();

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict() as z.ZodType<Prisma.UserFindFirstArgs>;

export default UserFindFirstArgsSchema;