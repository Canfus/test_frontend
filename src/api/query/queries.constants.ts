export const STALE_TIME = 5 * 60 * 1000;

export const queryKeys = {
  suggest: {
    people: (query: string) => ["suggest", "people", query],
  },
};

export const endpoints = {
  suggest: {
    people: () => ["suggest", "fio"].join("/"),
  },
};
