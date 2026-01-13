import styles from "./badge.module.scss";
import type { ReactNode } from "react";
import clsx from "clsx";
import type { TBadgeVariant } from "../../types/types.ts";

type TBadgeProps = {
  variant: TBadgeVariant;
  children: ReactNode;
};

export const Badge = (props: TBadgeProps) => {
  const { variant, children } = props;

  return <span className={clsx(styles.cardBadge, styles[variant])}>{children}</span>;
};
