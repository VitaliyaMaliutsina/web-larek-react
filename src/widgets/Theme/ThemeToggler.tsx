import { type ChangeEvent, type ChangeEventHandler, useState } from "react";
import { Input } from "../../shared/ui/Input/Input.tsx";

export const ThemeToggler = () => {
  const [theme, setTheme] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked === false;
    const updateTheme = isChecked ? "dark" : "light";
    setTheme(updateTheme);

    isChecked ? document.body.classList.add("darkLayout") : document.body?.classList.remove("darkLayout");
  };

  return (
    <Input type={"checkbox"} id={"theme"} onChange={onChangeHandler} checked={theme === "light"}>
      <label htmlFor="theme">theme</label>
    </Input>
  );
};
