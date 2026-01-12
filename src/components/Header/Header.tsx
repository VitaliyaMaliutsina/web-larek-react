import styles from "./header.module.scss";
import { useState } from "react";
import { Modal } from "../Modal/Modal.tsx";
import { Button } from "../Button/Button.tsx";
import { Basket } from "../Basket/Basket.tsx";
import { useSelector } from "../../services/store.ts";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const count = useSelector((state) => state.basket.items);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapperContent}>
          <a href="/">
            <img src="./logo.svg" alt="" className={styles.logo} />
          </a>

          <Button className={styles.basket} onClick={() => setIsOpen(!isOpen)}>
            <span className={styles.basketCount}>{count.length}</span>
          </Button>
        </div>
      </header>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
          <Basket />
        </Modal>
      )}
    </>
  );
};
