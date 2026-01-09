import styles from "./mainPage.module.scss";

import { Gallery } from "../../components/Gallery/Gallery.tsx";
import { CardBasket } from "../../components/CardBasket/CardBasket.tsx";
import { Modal } from "../../components/Modal/Modal.tsx";
import { useState } from "react";
import { useSelector } from "../../services/store.ts";
import { CardModal } from "../../components/CardModal/CardModal.tsx";

type Props = {};
export const MainPage = (props: Props) => {
  const {} = props;

  const [isOpen, setIsOpen] = useState(false);

  const open = useSelector((state) => state.modal.selectedCard);
  const product = useSelector((state) => state.products.products[open]);
  return (
    <main className={styles.container}>
      {open && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
          <CardModal
            title={product.title}
            price={product.price}
            category={product.category}
            image={product.image}
            id={product.id}
            description={product.description}
          />
        </Modal>
      )}
      <Gallery />
    </main>
  );
};
