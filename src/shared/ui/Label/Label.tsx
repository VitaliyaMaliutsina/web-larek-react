import type { ReactNode } from "react";

type TProps = React.ComponentProps<"label"> & {
  children: ReactNode;
};
export const Label = (props: TProps) => {
  const { children, htmlFor } = props;

  return <label htmlFor={htmlFor}>{children}</label>;
};
