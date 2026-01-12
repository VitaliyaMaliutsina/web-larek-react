import styles from "./cardModal.module.scss";
import { Badge } from "../Badge/Badge.tsx";
import clsx from "clsx";
import { categorySkills } from "../../types/types.ts";
import { Button } from "../Button/Button.tsx";
import { useDispatch } from "../../services/store.ts";
import { addItem } from "../../services/slices/basketSlice.ts";

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

  const handleBuyProduct = () => {
    dispatch(addItem(id));
  };

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
            <Button className={styles.button} onClick={handleBuyProduct}>
              Купить
            </Button>
          </div>
          <span className={styles.cardPrice}>{price} синапсов</span>
        </div>
      </div>
    </article>
  );
};
