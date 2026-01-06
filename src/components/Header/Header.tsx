import styles from "./header.module.scss";
import { useState } from "react";
import { CardBasket } from "../CardBasket/CardBasket.tsx";
import { Modal } from "../Modal/Modal.tsx";

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
            <>
              <button onClick={() => setIsOpen(!isOpen)}>X</button>
              <h3>Корзина</h3>
              <p>Корзина пуста</p>
              <div>
                <CardBasket />
              </div>
              <button>оформить</button>
              <span>0 синапсов</span>
            </>
          }
        </Modal>
      )}
    </>
  );
};
