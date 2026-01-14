import styles from "./cardBasket.module.scss";
import { Button } from "../../shared/ui/Button/Button.tsx";
import type { TProduct } from "../../shared/types/types.ts";
import { useDispatch, useSelector } from "../../app/store/store.ts";
import { deleteItem } from "../../entities/basket/model/basketSlice.ts";

type TProps = {
  id: string;
  index: number;
};

export const CardBasket = (props: TProps) => {
  const { id, index } = props;
  const dispatch = useDispatch();
  const products: TProduct = useSelector((state) => state.products.products[id]);

  const handleDeleteProduct = () => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      <article className={styles.cardBasket}>
        <span className={styles.cardIndex}>{index + 1}</span>
        <h2 className={styles.cardTitle}>{products.title}</h2>
        <span className={styles.cardPrice}>{products.price === null ? "бесценно" : `${products.price} синапсов`}</span>
        <Button className={styles.deleteButton} onClick={handleDeleteProduct}>
          <span className="visuallyHidden">Удалить товар из корзины</span>
        </Button>
      </article>
    </>
  );
};
