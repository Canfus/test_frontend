import type { ListboxProps } from "@headlessui/react";

export type SelectOption<T = any> = {
  id: number;
  label: string;
  value: string;
  disabled?: boolean;
  data?: T;
};

export interface SelectProps<T> extends Omit<ListboxProps, "value"> {
  options: SelectOption<T>[];
  label: string;
  value?: string | string[] | null;
  placeholder?: string;
  displayValue?: (option: SelectOption<T>) => string;
  returnValue?: (option: SelectOption<T>) => string;
  invalid?: boolean;
  reset?: string;
  className?: string;
  required?: boolean;
}
