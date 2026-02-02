import styles from "./input.module.scss";
import * as React from "react";
import clsx from "clsx";

type TProps = React.ComponentProps<"input"> & {};
export const Input = (props: TProps) => {
  const {
    type = "text",
    placeholder,
    id,
    onChange,
    onClick,
    value,
    name,
    required,
    autoComplete,
    checked,
    className,
  } = props;

  return (
    <input
      autoComplete={autoComplete}
      id={id}
      name={name}
      type={type}
      className={clsx(className ? className : styles.input)}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
      value={value}
      required={required}
      checked={checked}
    ></input>
  );
};
