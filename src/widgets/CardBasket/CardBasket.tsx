import styles from "./cardBasket.module.scss";
import { Button } from "../../shared/ui/Button/Button.tsx";
import type { TProduct, TProductBasket } from "../../shared/types/types.ts";
import { useDispatch, useSelector } from "../../app/store/store.ts";
import { deleteItem } from "../../entities/basket/model/basketSlice.ts";

type TProps = {
  id: string;
};

export const CardBasket = (props: TProps) => {
  const { id } = props;
  const dispatch = useDispatch();
  const products: TProduct = useSelector((state) => state.products.products[id]);

  const index = useSelector((state) => state.basket.index);
  console.log(index);

  const handleDeleteProduct = () => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      <article className={styles.cardBasket}>
        <span className={styles.cardIndex}>{index}</span>
        <h2 className={styles.cardTitle}>{products.title}</h2>
        <span className={styles.cardPrice}>{products.price === null ? "бесценно" : `${products.price} синапсов`}</span>
        <Button className={styles.deleteButton} onClick={handleDeleteProduct}>
          <span className="visuallyHidden">Удалить товар из корзины</span>
        </Button>
      </article>
    </>
  );
};
