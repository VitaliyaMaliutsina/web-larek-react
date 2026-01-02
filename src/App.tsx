import { MainPage } from "./pages/MainPage/MainPage.tsx";
import { Header } from "./components/Header/Header.tsx";
import { useDispatch, useSelector } from "./services/store.ts";
import { useEffect } from "react";
import { fetchGetCards } from "./services/thunks/fetchGetCards.ts";

export const App = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.cards.cards);

  console.log(card);

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
