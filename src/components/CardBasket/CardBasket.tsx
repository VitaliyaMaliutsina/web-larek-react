import styles from "./cardBasket.module.scss";
import { Button } from "../Button/Button.tsx";

export const CardBasket = () => {
  return (
    <>
      <article className={styles.cardBasket}>
        <span className={styles.cardIndex}>1</span>
        <h2 className={styles.cardTitle}>Кнопка «Замьютить кота»</h2>{" "}
        {/*сделать чтоб при ховере писалось полное назвние*/}
        <span className={styles.cardPrice}>150 000 синапсов</span>
        <Button className={styles.deleteButton}>X</Button>
      </article>
    </>
  );
};
