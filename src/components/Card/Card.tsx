import styles from "./card.module.scss";
import { Badge } from "../Badge/Badge.tsx";
import { categorySkills, type TBadgeVariant, type TProduct } from "../../types/types.ts";

type TCardProps = Omit<TProduct, "description">;

export const Card = (card: TCardProps) => {
  const { title, price, category, image, id } = card;

  const variant: TBadgeVariant = categorySkills[category];

  return (
    <article className={styles.card}>
      <Badge variant={variant}>{category}</Badge>
      <h2 className={styles.cardTitle}>{title}</h2>

      <img src={image} alt="" className={styles.cardImg} />

      <span className={styles.cardPrice}>{price === null ? "Бесценно" : `${price} синапсов`}</span>
    </article>
  );
};
