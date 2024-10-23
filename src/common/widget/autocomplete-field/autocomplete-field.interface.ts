import type {
  FieldValues,
  FieldPath,
  UseControllerProps,
  Control,
} from "react-hook-form";

import type { AutocompleteProps } from "@app/common";

export type AutocompleteFieldProps<
  TData,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> &
  Omit<AutocompleteProps<TData>, "value" | "onValueChange"> & {
    control: Control<TFieldValues>;
  };
