import styles from "./card.module.scss";
import { Badge } from "../../shared/ui/Badge/Badge.tsx";
import { categorySkills, type TBadgeVariant } from "../../shared/types/types.ts";
import { useDispatch, useSelector } from "../../app/store/store.ts";
import { openModal } from "../../entities/modal/model/modalSlice.ts";

type TCardProps = {
  id: string;
};

export const Card = (props: TCardProps) => {
  const { id } = props;

  const product = useSelector((state) => state.products.products[id]);
  const dispatch = useDispatch();

  const variant: TBadgeVariant = categorySkills[product.category];

  const handleOpenCard = () => {
    dispatch(openModal({ type: "card", payload: id }));
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
