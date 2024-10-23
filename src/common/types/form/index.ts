import type { FieldValues, FieldErrors } from "react-hook-form";

export type SuccessSubmitHandler<TFieldValues extends FieldValues> = (
  values: TFieldValues,
) => void;
export type RejectSubmitHandler<TFieldValues extends FieldValues> = (
  error: FieldErrors<TFieldValues>,
) => void;
