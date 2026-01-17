import styles from "./input.module.scss";
import * as React from "react";

type TProps = React.ComponentProps<"input"> & {};
export const Input = (props: TProps) => {
  const { type = "text", placeholder, id, onChange } = props;

  return <input id={id} type={type} className={styles.input} placeholder={placeholder} onChange={onChange}></input>;
};
