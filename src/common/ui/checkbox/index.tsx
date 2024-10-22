import { forwardRef } from "react";
import { Root } from "@radix-ui/react-checkbox";

import type { CheckboxProps } from "./checkbox.interface";
import styles from "./checkbox.module.css";

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => (
    <label className={[styles.checkbox__label, className].join(" ")}>
      <Root {...props} ref={ref} className={styles.checkbox} />
      {label}
    </label>
  ),
);
Checkbox.displayName = "Checkbox";
