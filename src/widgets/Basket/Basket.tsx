import styles from "./basket.module.scss";
import { Button } from "../../shared/ui/Button/Button.tsx";
import { useSelector } from "../../app/store/store.ts";
import { CardBasket } from "../CardBasket/CardBasket.tsx";

export const Basket = () => {
  const items = useSelector((state) => state.basket.items);

  console.log("items", items);

  return (
    <div className={styles.basketContainer}>
      <h3 className={styles.basketTitle}>Корзина</h3>
      {items.length === 0 ? <p className={styles.basketSubTitle}>Корзина пуста</p> : null}

      <div className={styles.cardsContainer}>
        {items.length &&
          items.map((id) => {
            return <CardBasket key={id} id={id} />;
          })}
      </div>
      <div className={styles.buttonContainer}>
        <Button className={styles.basketButton} type={"submit"}>
          оформить
        </Button>
        <span className={styles.basketPrice}>0 синапсов</span>
      </div>
    </div>
  );
};
