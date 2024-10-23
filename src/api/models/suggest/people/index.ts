import type { Nullable } from "@app/common";

interface PeopleSuggestData {
  surname: Nullable<string>;
  name: Nullable<string>;
  patronymic: Nullable<string>;
  gender: Nullable<string>;
  source: Nullable<string>;
  gc: Nullable<string>;
}

export interface PeopleSuggest {
  value: Nullable<string>;
  unrestricted_value: Nullable<string>;
  data: PeopleSuggestData;
}

export interface PeopleSuggestResponse {
  suggestions: PeopleSuggest[];
}
