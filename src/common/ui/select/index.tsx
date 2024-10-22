import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";

import type { SelectProps } from "./select.interface";
import styles from "./select.module.css";

export const Select = <T = {},>({
  options,
  returnValue,
  displayValue,
  invalid,
  disabled,
  placeholder,
  className,
  reset,
  ...props
}: SelectProps<T>) => (
  <Listbox {...props} disabled={disabled}>
    {({ value, open }) => {
      const selectedOption = options.find((option) =>
        returnValue ? returnValue(option) === value : option.value === value,
      );
      const label = selectedOption
        ? displayValue
          ? displayValue(selectedOption)
          : selectedOption.label
        : placeholder;

      return (
        <>
          <ListboxButton
            className={[
              styles.select__trigger,
              open ? styles["select__trigger--open"] : undefined,
              className,
            ].join(" ")}
          >
            {label}
          </ListboxButton>
          <ListboxOptions
            as="ul"
            className={styles.select__list_items}
            anchor={{
              to: "bottom",
              gap: 8,
            }}
            transition
          >
            {reset && (
              <ListboxOption
                as="li"
                value={null}
                className={styles.select__list_item}
              >
                {reset}
              </ListboxOption>
            )}
            {options.map((option) => (
              <ListboxOption
                key={option.id}
                as="li"
                value={returnValue ? returnValue(option) : option.value}
                disabled={option.disabled}
                className={styles.select__list_item}
              >
                {option.label}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </>
      );
    }}
  </Listbox>
);

export type { SelectOption } from "./select.interface";
