import styles from "./card.module.scss";
import { Badge } from "../Badge/Badge.tsx";
import { categorySkills, type TBadgeVariant } from "../../types/types.ts";
import { useState } from "react";
import { CardModal } from "../CardModal/CardModal.tsx";
import { Modal } from "../Modal/Modal.tsx";

type TCardProps = {
  title: string;
  price: number | null;
  category: string;
  image: string;
  id: string;
  description: string;
};

export const Card = (props: TCardProps) => {
  const { title, price, category, image, id, description } = props;

  const [isOpen, setIsOpen] = useState(false);

  const variant: TBadgeVariant = categorySkills[category];

  return isOpen ? (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
      <button onClick={() => setIsOpen(!isOpen)}>X</button>
      <CardModal title={title} price={price} category={category} image={image} id={id} description={description} />
    </Modal>
  ) : (
    <article className={styles.card} onClick={() => setIsOpen(!isOpen)}>
      <Badge variant={variant}>{category}</Badge>
      <h2 className={styles.cardTitle}>{title}</h2>

      <img src={image} alt={description} className={styles.cardImg} />

      <span className={styles.cardPrice}>{price === null ? "Бесценно" : `${price} синапсов`}</span>
    </article>
  );
};
