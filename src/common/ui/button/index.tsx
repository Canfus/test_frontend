import { forwardRef } from "react";

import type { ButtonProps } from "./button.interface";
import styles from "./button.module.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={[styles.button, className].join(" ")}
    />
  ),
);
Button.displayName = "Button";
