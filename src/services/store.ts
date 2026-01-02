import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { cardsSlice } from "./slices/cardSlice.ts";
import { type TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from "react-redux";

const rootReducer = combineSlices(cardsSlice);

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
