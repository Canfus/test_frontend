import type {
  FieldValues,
  FieldPath,
  UseControllerProps,
  Control,
} from "react-hook-form";

import type { SelectProps } from "@app/common";

export type SelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> &
  SelectProps<TFieldValues> & {
    control: Control<TFieldValues>;
  };
