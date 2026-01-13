import { MainPage } from "../pages/MainPage/MainPage.tsx";
import { Header } from "../widgets/Header/Header.tsx";
import { useDispatch } from "./store/store.ts";
import { useEffect } from "react";
import { fetchGetCards } from "../entities/product/model/fetchGetCards.ts";
import "./styles/index.scss";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetCards());
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainPage />
    </>
  );
};
