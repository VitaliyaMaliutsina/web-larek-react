import styles from "./button.module.scss";
import type { ReactNode } from "react";
import clsx from "clsx";

type TButtonProps = React.ComponentProps<"button"> & {
  children: ReactNode;
};
export const Button = (props: TButtonProps) => {
  const { children, onClick, type = "button", className } = props;

  return (
    <button className={clsx(className ? className : styles.button)} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
