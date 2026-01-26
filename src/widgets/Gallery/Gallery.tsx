import styles from "./gallery.module.scss";
import { Card } from "../Card/Card.tsx";
import { useSelector } from "../../app/store/store.ts";

export const Gallery = () => {
  const ids = useSelector((state) => state.products.ids);

  return (
    <>
      <section className={styles.container}>
        {ids.map((id) => {
          return <Card id={id} key={id} />;
        })}
      </section>
    </>
  );
};
