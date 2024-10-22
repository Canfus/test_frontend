import { forwardRef } from "react";

import type { InputProps } from "./input.interface";
import styles from "./input.module.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, placeholder, label, id, disabled, ...props }, ref) => (
    <div className={[styles.input__wrapper, className].join(" ")}>
      <label
        htmlFor={id}
        className={[styles.input__label, styles["input__label--disabled"]].join(
          " ",
        )}
      >
        {label}
      </label>
      <input
        {...props}
        ref={ref}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        className={[
          styles.input,
          invalid ? styles["input--invalid"] : undefined,
        ].join(" ")}
      />
    </div>
  ),
);
Input.displayName = "Input";
