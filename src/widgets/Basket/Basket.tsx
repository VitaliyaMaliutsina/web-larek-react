import styles from "./basket.module.scss";
import { Button } from "../../shared/ui/Button/Button.tsx";
import { useSelector } from "../../app/store/store.ts";
import { CardBasket } from "../CardBasket/CardBasket.tsx";
import clsx from "clsx";

export const Basket = () => {
  const items = useSelector((state) => state.basket.items);
  const products = useSelector((state) => state.products.products);

  const price = items.reduce((acc, val) => {
    return acc + products[val]?.price;
  }, 0);

  return (
    <div className={styles.basketContainer}>
      <h3 className={styles.basketTitle}>Корзина</h3>
      {items.length === 0 ? (
        <p className={styles.basketSubTitle}>Корзина пуста</p>
      ) : (
        <div className={clsx(styles.cardsContainer, styles.scrollbar)}>
          {items.length &&
            items.map((id, index) => {
              return <CardBasket key={id} id={id} index={index} />;
            })}
        </div>
      )}

      <div className={styles.buttonContainer}>
        <Button className={styles.basketButton} type={"submit"} onClick={() => console.log("buy")}>
          оформить
        </Button>
        <span className={styles.basketPrice}>{price} синапсов</span>
      </div>
    </div>
  );
};
