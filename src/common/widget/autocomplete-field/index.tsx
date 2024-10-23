import { memo } from "react";
import { useController, type FieldValues } from "react-hook-form";

import { Autocomplete } from "@app/common";

import type { AutocompleteFieldProps } from "./autocomplete-field.interface";
import styles from "./autocomplete-field.module.css";

const InnerComponent = <TData, TFieldValues extends FieldValues = FieldValues>({
  className,
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  ...props
}: AutocompleteFieldProps<TData, TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
  });

  const { onChange, ref, ...restField } = field;
  const { error, invalid } = fieldState;

  return (
    <div className={[styles.field, className].join(" ")}>
      <Autocomplete
        {...props}
        {...restField}
        onValueChange={onChange}
        invalid={invalid}
      />
      {error && <p className={styles.field__error}>{error.message}</p>}
    </div>
  );
};

export const AutocompleteField = memo(InnerComponent) as typeof InnerComponent;
