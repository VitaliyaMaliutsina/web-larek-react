import styles from "./gallery.module.scss";
import { Card } from "../Card/Card.tsx";
import { useSelector } from "../../app/store/store.ts";
import { FormOrder } from "../FormOrder/FormOrder.tsx";
import { Modal } from "../Modal/Modal.tsx";

export const Gallery = () => {
  const ids = useSelector((state) => state.products.ids);

  return (
    <>
      <section className={styles.container}>
        {ids.map((id) => {
          return <Card id={id} key={id} />;
        })}

        {/* <Modal isOpen={true}>
          <FormOrder> </FormOrder>
        </Modal>*/}
      </section>
    </>
  );
};
