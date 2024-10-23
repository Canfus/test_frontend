import type { SelectOption } from "@app/common";

export const groupOptions: SelectOption[] = [
  {
    id: 0,
    value: "vip",
    label: "VIP",
  },
  {
    id: 1,
    value: "with_problems",
    label: "Проблемные",
  },
  {
    id: 2,
    value: "oms",
    label: "ОМС",
  },
  {
    id: 3,
    value: "dms",
    label: "ДМС",
  },
];

export const doctorOptions: SelectOption[] = [
  {
    id: 0,
    value: "Захаров",
    label: "Захаров",
  },
  {
    id: 1,
    value: "Петров",
    label: "Петров",
  },
  {
    id: 2,
    value: "Черниговская",
    label: "Черниговская",
  },
];

export const sexOptions: SelectOption[] = [
  {
    id: 0,
    value: "male",
    label: "Мужской",
  },
  {
    id: 1,
    value: "female",
    label: "Женский",
  },
];
