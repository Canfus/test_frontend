import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";

import { ArrowDownIcon } from "@app/common";

import type { SelectProps } from "./select.interface";
import styles from "./select.module.css";

export const Select = <T = {},>({
  options,
  returnValue,
  displayValue,
  invalid,
  disabled,
  placeholder,
  label,
  className,
  reset,
  ...props
}: SelectProps<T>) => (
  <Listbox {...props} disabled={disabled}>
    {({ value, open }) => {
      const selectedOption = options.find((option) =>
        returnValue ? returnValue(option) === value : option.value === value,
      );
      const diplayLabel = selectedOption
        ? displayValue
          ? displayValue(selectedOption)
          : selectedOption.label
        : "Выберите значение";

      return (
        <>
          <div className={styles.select__trigger_wrapper}>
            <span className={styles.trigger__label}>{label}</span>
            <ListboxButton
              className={[
                styles.select__trigger,
                open ? styles["select__trigger--open"] : undefined,
                invalid ? styles["select__trigger--invalid"] : undefined,
                className,
              ].join(" ")}
            >
              {diplayLabel}
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
