import styles from "./cardBasket.module.scss";
import { Button } from "../Button/Button.tsx";
import type { TProduct } from "../../types/types.ts";
import { useDispatch, useSelector } from "../../services/store.ts";
import { deleteItem } from "../../services/slices/basketSlice.ts";

type TProps = {
  id: string;
};

export const CardBasket = (props: TProps) => {
  const { id } = props;
  const dispatch = useDispatch();
  const products: TProduct = useSelector((state) => state.products.products[id]);

  /*console.log("products", products);*/

  const handleDeleteProduct = () => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      <article className={styles.cardBasket}>
        <span className={styles.cardIndex}>1</span>
        <h2 className={styles.cardTitle}>{products.title}</h2> {/*сделать чтоб при ховере писалось полное назвние*/}
        <span className={styles.cardPrice}>{products.price} синапсов</span>
        <Button className={styles.deleteButton} onClick={handleDeleteProduct}>
          X
        </Button>
      </article>
    </>
  );
};
