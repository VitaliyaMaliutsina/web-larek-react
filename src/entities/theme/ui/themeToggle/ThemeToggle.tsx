import { type ChangeEvent, useState } from "react";
import { setTheme } from "../../model/themeSlice.ts";
import { useDispatch, useSelector } from "../../../../app/store/store.ts";
import { Input } from "../../../../shared/ui/Input/Input.tsx";
import { THEME_STORAGE } from "../../../../shared/constants/constants.ts";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.Theme.theme);
  console.log(theme);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked === false;
    const updateTheme = isChecked ? "dark" : "light";
    dispatch(setTheme(updateTheme));
  };

  return (
    <Input type={"checkbox"} id={"theme"} onChange={onChangeHandler} checked={theme === "light"}>
      <label htmlFor="theme">theme</label>
    </Input>
  );
};
