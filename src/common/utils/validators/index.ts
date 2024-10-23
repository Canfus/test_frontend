import z from "zod";

import { TypeGuards } from "@app/common";

import { defaultErrorMessages } from "./validators.constants";

export const validators = {
  getStringRequiredValidationSchema: (message?: string) =>
    z
      .string()
      .min(1, message || defaultErrorMessages.EMPTY_ERROR)
      .default(""),
  getPhoneNumberRequiredValidationSchema: () =>
    z
      .string()
      .superRefine((value, ctx) => {
        if (
          !/(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/.test(value)
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.invalid_string,
            validation: "regex",
            message: defaultErrorMessages.PHONE_NUMBER_ERROR,
          });
        }

        if (TypeGuards.isStringEmpty(value)) {
          ctx.addIssue({
            code: z.ZodIssueCode.too_small,
            minimum: 1,
            inclusive: false,
            type: "string",
            message: defaultErrorMessages.EMPTY_ERROR,
          });
        }
      })
      .default(""),
  getSelectRequiredValidationSchema: (message?: string) =>
    z
      .string()
      .nullable()
      .superRefine((value, ctx) => {
        if (TypeGuards.isNull(value)) {
          ctx.addIssue({
            code: z.ZodIssueCode.invalid_type,
            expected: "string",
            received: "null",
            message: message || defaultErrorMessages.SELECT_NULL_ERROR,
          });
        }
      })
      .default(null),
  getBooleanValidationSchema: () => z.boolean().default(false),
};
