import type {
  FieldValues,
  FieldPath,
  UseControllerProps,
  Control,
} from "react-hook-form";

import type { CheckboxProps } from "@app/common";

export type CheckboxFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> &
  CheckboxProps & {
    control: Control<TFieldValues>;
  };
