import styles from "./basket.module.scss";
import { Button } from "../Button/Button.tsx";

export const Basket = () => {
  return (
    <div className={styles.basketContainer}>
      <h3 className={styles.basketTitle}>Корзина</h3>
      <p className={styles.basketSubTitle}>Корзина пуста</p>
      <div className={styles.cardsContainer}></div>
      <div className={styles.buttonContainer}>
        <Button className={styles.basketButton} type={"submit"}>
          оформить
        </Button>
        <span className={styles.basketPrice}>0 синапсов</span>
      </div>
    </div>
  );
};
