import styles from "./cardModal.module.scss";
import { Badge } from "../../shared/ui/Badge/Badge.tsx";
import clsx from "clsx";
import { categorySkills } from "../../shared/types/types.ts";
import { Button } from "../../shared/ui/Button/Button.tsx";
import { useDispatch, useSelector } from "../../app/store/store.ts";
import { addItem, deleteItem } from "../../entities/basket/model/basketSlice.ts";

type TCardModalProps = {
  title: string;
  price: number | null;
  category: string;
  image: string;
  id: string;
  description: string;
};
export const CardModal = (props: TCardModalProps) => {
  const { title, price, category, image, id, description } = props;
  const dispatch = useDispatch();
  const variant = categorySkills[category];

  const items = useSelector((state) => state.basket.items).some((item) => item === id);

  const handleBuyProduct = () => {
    if (!items) {
      dispatch(addItem(id));
    } else {
      dispatch(deleteItem(id));
    }
  };

  const buttonState = price === null ? "Недоступно" : items ? "Удалить из корзины" : "Купить";

  return (
    <article className={styles.card}>
      <div>
        <img src={image} alt={description} className={styles.cardImg} />
      </div>
      <div className={styles.cardContentWrapper}>
        <Badge variant={variant}>{category}</Badge>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={clsx(styles.cardDescription, styles.scrollbar)}>{description}</p>
        <div className={styles.buttonPriceWrapper}>
          <div className={styles.buttonContainer}>
            <Button className={styles.button} onClick={handleBuyProduct} disabled={price === null}>
              {buttonState}
            </Button>
          </div>
          <span className={styles.cardPrice}>{price === null ? "Бесценно" : `${price} синапсов`} </span>
        </div>
      </div>
    </article>
  );
};
