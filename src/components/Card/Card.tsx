import styles from "./card.module.scss";
import { Badge } from "../Badge/Badge.tsx";
import { categorySkills, type TBadgeVariant } from "../../types/types.ts";

type TCardProps = {
  title: string;
  price: number | null;
  category: string;
  image: string;
  id: string;
};

export const Card = (props: TCardProps) => {
  const { title, price, category, image, id } = props;

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
