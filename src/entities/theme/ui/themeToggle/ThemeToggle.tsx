import styles from "./themeToggle.module.scss";
import { type ChangeEvent } from "react";
import { setTheme } from "../../model/themeSlice.ts";
import { useDispatch, useSelector } from "../../../../app/store/store.ts";
import { Input } from "../../../../shared/ui/Input/Input.tsx";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.Theme.theme);
  console.log(theme);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const updateTheme = !e.target.checked ? "dark" : "light";
    dispatch(setTheme(updateTheme));
  };

  return (
    <label htmlFor="theme" className={styles.switch}>
      <Input
        type={"checkbox"}
        id={"theme"}
        onChange={onChangeHandler}
        checked={theme === "light"}
        className={styles.switchInput}
      />
      <span className={styles.switchSlider}></span>
    </label>
  );
};
