import { memo } from "react";
import { useController, type FieldValues } from "react-hook-form";

import { Select } from "@app/common";

import type { SelectFieldProps } from "./select-field.interface";
import styles from "./select-field.module.css";

const InnerComponent = <TFieldValues extends FieldValues = FieldValues>({
  className,
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  ...props
}: SelectFieldProps<TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
  });

  const { ref, ...restField } = field;
  const { error, invalid } = fieldState;

  return (
    <div className={[styles.field, className].join(" ")}>
      <Select {...props} {...restField} invalid={invalid} />
      {error && <p className={styles.field__error}>{error.message}</p>}
    </div>
  );
};

export const SelectField = memo(InnerComponent) as typeof InnerComponent;
