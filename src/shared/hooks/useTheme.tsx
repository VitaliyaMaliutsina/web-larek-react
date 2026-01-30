import { THEME_STORAGE } from "../constants/constants.ts";

export const useTheme = () => {
  const savedTheme = localStorage.getItem(THEME_STORAGE) || "light";
};
