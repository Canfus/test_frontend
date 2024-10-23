import { useState, useMemo } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";

import { Input } from "..";
import type {
  AutocompleteProps,
  AutocompleteOption,
} from "./autocomplete.interface";
import styles from "./autocomplete.module.css";

export const Autocomplete = <TData,>({
  query,
  formatter,
  value,
  onValueChange,
  returnValue,
  ...inputProps
}: AutocompleteProps<TData>) => {
  const [search, setSearch] = useState<string>("");

  const { data } = query(search);

  const options = useMemo<AutocompleteOption[]>(
    () => (data ? data.map(formatter) : []),
    [data],
  );

  return (
    <Combobox value={value} onChange={onValueChange}>
      <ComboboxInput
        {...inputProps}
        as={Input}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <ComboboxOptions
        as="ul"
        className={styles.autocomplete__list_items}
        anchor={{
          to: "bottom",
          gap: 8,
        }}
        transition
      >
        {options.map((option) => (
          <ComboboxOption
            key={option.id}
            as="li"
            value={returnValue ? returnValue(option) : option.value}
            className={styles.autocomplete__list_item}
          >
            {option.label}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
};

export type { AutocompleteProps, AutocompleteOption };
