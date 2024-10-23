import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  useNotification,
  type SuccessSubmitHandler,
  type RejectSubmitHandler,
  TextField,
  SelectField,
  CheckboxField,
  Button,
  AutocompleteField,
} from "@app/common";
import { useSuggestPeopleQuery } from "@app/api";

import { schema } from "./app.schema";
import type { Schema } from "./app.interface";
import {
  defaultValues,
  groupOptions,
  doctorOptions,
  sexOptions,
} from "./app.constants";
import styles from "./app.module.css";
import { PeopleSuggest } from "../api";

export const App = () => {
  const { callNotification } = useNotification();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSuccessSubmit: SuccessSubmitHandler<Schema> = (values) => {
    console.log("Validation successfully", values);

    callNotification({
      type: "success",
      content: "Новый клиент успешно создан",
    });
  };

  const onRejectSubmit: RejectSubmitHandler<Schema> = (errors) => {
    console.error("Validation failed", errors);

    callNotification({
      type: "error",
      content: "Ошибка валидации формы",
    });
  };

  return (
    <div className={styles.page}>
      <form
        onSubmit={handleSubmit(onSuccessSubmit, onRejectSubmit)}
        className={styles.form}
      >
        <AutocompleteField<PeopleSuggest, Schema>
          control={control}
          name="full_name"
          query={useSuggestPeopleQuery}
          formatter={(option, index) => ({
            id: index,
            value: option.value || "",
            label: option.value || "",
          })}
          placeholder="Иванов Иван Иванович"
          label="ФИО"
          required
        />
        <TextField
          control={control}
          name="birth_date"
          type="date"
          label="Дата рождения"
          placeholder="08/08/1995"
          required
        />
        <TextField
          control={control}
          name="phone_number"
          label="Номер телефона"
          placeholder="+79999999999"
          required
        />
        <SelectField
          control={control}
          name="sex"
          options={sexOptions}
          label="Пол"
        />
        <SelectField
          control={control}
          name="group"
          options={groupOptions}
          label="Группа клиентов"
          multiple
          required
        />
        <SelectField
          control={control}
          name="doctor"
          options={doctorOptions}
          label="Лечащий врач"
        />
        <CheckboxField
          control={control}
          name="message_allowed"
          label="Я хочу получать СМС уведомления"
          className={styles.form__row_full}
        />
        <Button type="submit" className={styles.form__row_full}>
          Сохранить
        </Button>
      </form>
    </div>
  );
};
