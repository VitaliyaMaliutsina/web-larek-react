import styles from "./button.module.scss";
import type { ReactNode } from "react";
import clsx from "clsx";

type variant = "primary" | "back" | "disabled" | "delete" | "basket" | "close";

type TButtonProps = React.ComponentProps<"button"> & {
  children?: ReactNode;
  variant?: variant;
};
export const Button = (props: TButtonProps) => {
  const { children, onClick, type = "button", disabled, variant = "primary", className } = props;

  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
