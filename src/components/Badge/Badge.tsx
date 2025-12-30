import styles from "./badge.module.scss";
import type { ReactNode } from "react";
import clsx from "clsx";

type variant = "category1" | "category2" | "category3" | "category4" | "category5";

type TBadgeProps = {
  variant: variant;
  children: ReactNode;
  className?: string;
};

export const Badge = (props: TBadgeProps) => {
  const { variant, children, className } = props;

  return <span className={(clsx(styles.cardBadge, styles[variant]), className)}>{children}</span>;
};
