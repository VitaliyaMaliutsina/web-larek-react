import styles from "./gallery.module.scss";
import { Card } from "../Card/Card.tsx";
import { useSelector } from "../../services/store.ts";

export const Gallery = () => {
  const cards = useSelector((state) => state.cards.cards);

  return (
    <section className={styles.container}>
      {cards.map((card) => {
        return <Card key={card.id} {...card} />;
      })}
    </section>
  );
};
