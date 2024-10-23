import { memo } from "react";
import { useController, type FieldValues } from "react-hook-form";

import { Checkbox } from "@app/common";

import type { CheckboxFieldProps } from "./checkbox-field.interface";

const InnerComponent = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  ...props
}: CheckboxFieldProps<TFieldValues>) => {
  const { field } = useController({
    control,
    name,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
  });

  const { value, onChange, ...restField } = field;

  return (
    <Checkbox
      {...props}
      {...restField}
      checked={value}
      onCheckedChange={onChange}
    />
  );
};

export const CheckboxField = memo(InnerComponent) as typeof InnerComponent;
