import type { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import type { InputProps } from "..";

export interface AutocompleteOption {
  id: number;
  value: string;
  label: string;
  disabled?: boolean;
}

export interface AutocompleteProps<TData> extends Omit<InputProps, "value"> {
  query: (
    query: string,
    options?: Partial<UseQueryOptions<TData[], AxiosError>>,
  ) => UseQueryResult<TData[], AxiosError>;
  formatter: (
    option: TData,
    index: number,
    array: TData[],
  ) => AutocompleteOption;
  value: string | null;
  onValueChange: (value: string) => void;
  returnValue?: (option: AutocompleteOption) => string;
}
