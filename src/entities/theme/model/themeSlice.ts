import { createSlice } from "@reduxjs/toolkit";
import { THEME_STORAGE } from "../../../shared/constants/constants.ts";

const getInitialTheme = () => {
  const saved = localStorage.getItem(THEME_STORAGE);

  if (saved === "dark" || saved === "light" || saved === "system") {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

type TTheme = "dark" | "light" | "system";

type TInitialState = {
  theme: TTheme;
};

const initialState = {
  theme: getInitialTheme(),
};

export const ThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = ThemeSlice.actions;
