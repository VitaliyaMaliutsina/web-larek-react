import styles from "./mainPage.module.scss";

import { Gallery } from "../../components/Gallery/Gallery.tsx";
import { CardBasket } from "../../components/CardBasket/CardBasket.tsx";
import { Modal } from "../../components/Modal/Modal.tsx";
import { useState } from "react";

type Props = {};
export const MainPage = (props: Props) => {
  const {} = props;
  return (
    <main className={styles.container}>
      <Gallery />
    </main>
  );
};
