import styles from "./card.module.scss";
import { Badge } from "../Badge/Badge.tsx";
import { categorySkills, type TBadgeVariant } from "../../types/types.ts";
import { useDispatch, useSelector } from "../../services/store.ts";
import { openSelectedCard } from "../../services/slices/modalSlice.ts";

type TCardProps = {
  id: string;
};

export const Card = (props: TCardProps) => {
  const { id } = props;

  const product = useSelector((state) => state.products.products[id]);
  const dispatch = useDispatch();

  const variant: TBadgeVariant = categorySkills[product.category];

  const handleOpenCard = () => {
    dispatch(openSelectedCard(id));
  };

  return (
    <article className={styles.card} onClick={handleOpenCard}>
      <Badge variant={variant}>{product.category}</Badge>
      <h2 className={styles.cardTitle}>{product.title}</h2>

      <img src={product.image} alt={product.description} className={styles.cardImg} />

      <span className={styles.cardPrice}>{product.price === null ? "Бесценно" : `${product.price} синапсов`}</span>
    </article>
  );
};
