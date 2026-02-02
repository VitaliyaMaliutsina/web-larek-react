import { type ReactNode, useLayoutEffect } from "react";
import { useSelector } from "../store/store.ts";
import { THEME_STORAGE } from "../../shared/constants/constants.ts";

type Props = {
  children: ReactNode;
};
export const ThemeProvider = (props: Props) => {
  const { children } = props;

  const theme = useSelector((state) => state.Theme.theme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE, theme);
  }, [theme]);

  return <>{children}</>;
};
