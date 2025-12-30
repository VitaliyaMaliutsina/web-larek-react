import styles from "./gallery.module.scss";
import { Badge } from "../Badge/Badge.tsx";

type Props = {};
export const Gallery = (props: Props) => {
  const {} = props;

  return (
    <section className={styles.container}>
      <article className={styles.card}>
        <Badge variant={"category3"}>дополнительное</Badge>
      </article>
      <article className={styles.card}></article>
      <article className={styles.card}></article>
      <article className={styles.card}></article>
      <article className={styles.card}></article>
      <article className={styles.card}></article>
    </section>
  );
};
