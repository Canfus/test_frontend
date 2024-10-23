import { object } from "zod";

import { validators } from "@app/common";

export const schema = object({
  full_name: validators.getStringRequiredValidationSchema(),
  birth_date: validators.getStringRequiredValidationSchema(),
  phone_number: validators.getPhoneNumberRequiredValidationSchema(),
  sex: validators.getSelectNullableValidationSchema(),
  group: validators.getSelectMultipleRequiredValidationSchema(),
  doctor: validators.getSelectNullableValidationSchema(),
  message_allowed: validators.getBooleanValidationSchema(),
});
