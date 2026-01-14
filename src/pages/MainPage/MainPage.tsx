import styles from "./mainPage.module.scss";

import { Gallery } from "../../widgets/Gallery/Gallery.tsx";
import { Modal } from "../../widgets/Modal/Modal.tsx";
import { useDispatch, useSelector } from "../../app/store/store.ts";
import { CardModal } from "../../widgets/CardModal/CardModal.tsx";
import { closeSelectedCard } from "../../entities/modal/model/modalSlice.ts";
import { CardBasket } from "../../widgets/CardBasket/CardBasket.tsx";

export const MainPage = () => {
  const open = useSelector((state) => state.modal.selectedCard);

  const product = useSelector((state) => state.products.products[open]);
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  return (
    <main className={styles.container}>
      {open && (
        <Modal isOpen={isOpen} onClose={() => dispatch(closeSelectedCard(false))}>
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
