import type { Prisma } from "@prisma/client";
import { z } from "zod";

import { EnumRoleWithAggregatesFilterSchema } from "./EnumRoleWithAggregatesFilterSchema";
import { IntWithAggregatesFilterSchema } from "./IntWithAggregatesFilterSchema";
import { RoleSchema } from "./RoleSchema";
import { StringNullableWithAggregatesFilterSchema } from "./StringNullableWithAggregatesFilterSchema";
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema";

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => UserScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
        .optional(),
      email: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      name: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      password: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      role: z
        .union([
          z.lazy(() => EnumRoleWithAggregatesFilterSchema),
          z.lazy(() => RoleSchema),
        ])
        .optional(),
    })
    .strict() as z.ZodType<Prisma.UserScalarWhereWithAggregatesInput>;

export default UserScalarWhereWithAggregatesInputSchema;
