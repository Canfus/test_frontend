import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";

import { ArrowDownIcon, TypeGuards } from "@app/common";

import type { SelectProps } from "./select.interface";
import styles from "./select.module.css";

export const Select = <T = {},>({
  options,
  returnValue,
  displayValue,
  invalid,
  disabled,
  placeholder,
  value,
  label,
  className,
  required,
  reset,
  ...props
}: SelectProps<T>) => (
  <Listbox {...props} disabled={disabled}>
    {({ open }) => {
      const displayLabel = (() => {
        if (TypeGuards.isArray(value)) {
          const selectedOptions = options.filter((option) => {
            const optionValue = returnValue
              ? returnValue(option)
              : option.value;

            return value.includes(optionValue);
          });

          return !TypeGuards.isArrayEmpty(selectedOptions)
            ? selectedOptions
                .map((option) =>
                  displayValue ? displayValue(option) : option.label,
                )
                .join(", ")
            : "Выберите из списка";
        } else {
          const selectedOption = options.find((option) =>
            returnValue
              ? returnValue(option) === value
              : option.value === value,
          );
          return selectedOption
            ? displayValue
              ? displayValue(selectedOption)
              : selectedOption.label
            : "Выберите из списка";
        }
      })();

      return (
        <>
          <div className={styles.select__trigger_wrapper}>
            <span className={styles.trigger__label}>
              {label}
              {required && (
                <span className={styles["trigger__label--required"]}> *</span>
              )}
            </span>
            <ListboxButton
              className={[
                styles.select__trigger,
                open ? styles["select__trigger--open"] : undefined,
                invalid ? styles["select__trigger--invalid"] : undefined,
                className,
              ].join(" ")}
            >
              {displayLabel}
              <ArrowDownIcon
                className={[
                  styles.trigger__icon,
                  open ? styles["trigger__icon--open"] : undefined,
                ].join(" ")}
              />
            </ListboxButton>
          </div>
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

export type { SelectProps, SelectOption } from "./select.interface";
