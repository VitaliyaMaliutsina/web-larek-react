import styles from "./input.module.scss";
import * as React from "react";

type TProps = React.ComponentProps<"input"> & {};
export const Input = (props: TProps) => {
  const { type = "text", placeholder, id, onChange, value, name, required } = props;

  return (
    <input
      id={id}
      name={name}
      type={type}
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required={required}
    ></input>
  );
};
