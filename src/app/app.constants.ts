import type { SelectOption } from "@app/common";

import type { Schema } from "./app.interface";

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

export const defaultValues: Schema = {
  full_name: "",
  birth_date: "",
  phone_number: "",
  sex: null,
  group: [],
  doctor: null,
  message_allowed: false,
};
