import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/productSlice.ts";
import { type TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from "react-redux";
import { modalSlice } from "./slices/modalSlice.ts";

const rootReducer = combineSlices(productSlice, modalSlice);

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
