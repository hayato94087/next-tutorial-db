import type { Prisma } from "@prisma/client";
import { z } from "zod";

import { UserCreateInputSchema } from "../inputTypeSchemas/UserCreateInputSchema";
import { UserUncheckedCreateInputSchema } from "../inputTypeSchemas/UserUncheckedCreateInputSchema";
import { UserUncheckedUpdateInputSchema } from "../inputTypeSchemas/UserUncheckedUpdateInputSchema";
import { UserUpdateInputSchema } from "../inputTypeSchemas/UserUpdateInputSchema";
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

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    where: UserWhereUniqueInputSchema,
    create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
    update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
  })
  .strict() as z.ZodType<Prisma.UserUpsertArgs>;

export default UserUpsertArgsSchema;
