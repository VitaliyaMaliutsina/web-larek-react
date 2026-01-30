import { type ReactNode, useEffect } from "react";
import { useSelector } from "../store/store.ts";

type Props = {
  children: ReactNode;
};
export const ThemeProvider = (props: Props) => {
  const { children } = props;

  const theme = useSelector((state) => state.Theme.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("darkLayout");
    } else {
      document.body.classList.remove("darkLayout");
    }
  }, [theme]);

  return <>{children}</>;
};
