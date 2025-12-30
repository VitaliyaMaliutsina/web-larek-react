import styles from "./gallery.module.scss";

type Props = {};
export const Gallery = (props: Props) => {
  const {} = props;

  return (
    <section className={styles.container}>
      <article className={styles.card}></article>
      <article className={styles.card}></article>
      <article className={styles.card}></article>
      <article className={styles.card}></article>
      <article className={styles.card}></article>
      <article className={styles.card}></article>
    </section>
  );
};
