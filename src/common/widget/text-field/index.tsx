import { memo } from "react";
import { useController, type FieldValues } from "react-hook-form";

import { Input } from "@app/common";

import type { TextFieldProps } from "./text-field.interface";
import styles from "./text-field.module.css";

const InnerComponent = <TFieldValues extends FieldValues = FieldValues>({
  className,
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  ...props
}: TextFieldProps<TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
  });

  const { error, invalid } = fieldState;

  return (
    <div className={[styles.field, className].join(" ")}>
      <Input {...props} {...field} invalid={invalid} />
      {error && <p className={styles.field__error}>{error.message}</p>}
    </div>
  );
};

export const TextField = memo(InnerComponent) as typeof InnerComponent;
