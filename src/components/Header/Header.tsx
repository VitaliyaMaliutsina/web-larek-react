import styles from "./header.module.scss";
import { useState } from "react";
import { CardBasket } from "../CardBasket/CardBasket.tsx";
import { Modal } from "../Modal/Modal.tsx";
import { Button } from "../Button/Button.tsx";

type Props = {};
export const Header = (props: Props) => {
  const {} = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapperContent}>
          <a href="/">
            <img src="./logo.svg" alt="" className={styles.logo} />
          </a>

          <button className={styles.basket} onClick={() => setIsOpen(!isOpen)}>
            <span className={styles.basketCount}>0</span>
          </button>
        </div>
      </header>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
          {
            <div className={styles.basketContainer}>
              <h3 className={styles.basketTitle}>Корзина</h3>
              <p className={styles.basketSubTitle}>Корзина пуста</p>
              <div></div>
              <div>
                <Button className={styles.basketButton} type={"submit"}>
                  оформить
                </Button>
                <span className={styles.basketPrice}>0 синапсов</span>
              </div>
            </div>
          }
        </Modal>
      )}
    </>
  );
};
