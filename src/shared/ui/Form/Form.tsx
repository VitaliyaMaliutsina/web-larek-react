import styles from "./form.module.scss";
import type { ReactNode } from "react";
import clsx from "clsx";

type TProps = React.ComponentProps<"form"> & {
  children: ReactNode;
};
export const Form = (props: TProps) => {
  const { children, className, onChange, autoComplete = "on" } = props;

  return (
    <form className={clsx(className ? className : styles.form)} onChange={onChange} autoComplete={autoComplete}>
      {children}
    </form>
  );
};
