import styles from "./button.module.scss";
import type { ReactNode } from "react";

type TButtonProps = React.ComponentProps<"button"> & {
  children: ReactNode;
};
export const Button = (props: TButtonProps) => {
  const { children, onClick, type } = props;

  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
