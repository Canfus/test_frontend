import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import type { PeopleSuggestResponse, PeopleSuggest } from "@app/api";

import { customInstance } from "../../../api.instance";
import { endpoints, queryKeys, STALE_TIME } from "../../queries.constants";

export const useSuggestPeopleQuery = (
  query: string,
  options?: Partial<UseQueryOptions<PeopleSuggest[], AxiosError>>,
) =>
  useQuery<PeopleSuggest[], AxiosError>({
    queryKey: queryKeys.suggest.people(query),
    queryFn: async () => {
      const { data } = await customInstance.post<PeopleSuggestResponse>(
        endpoints.suggest.people(),
        { query },
      );

      return data.suggestions;
    },
    staleTime: STALE_TIME,
    ...options,
  });
