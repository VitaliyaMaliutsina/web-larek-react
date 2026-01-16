import styles from "./mainPage.module.scss";

import { Gallery } from "../../widgets/Gallery/Gallery.tsx";
import { Modal } from "../../widgets/Modal/Modal.tsx";
import { useDispatch, useSelector } from "../../app/store/store.ts";
import { CardModal } from "../../widgets/CardModal/CardModal.tsx";
import { closeModal } from "../../entities/modal/model/modalSlice.ts";
import { FormOrder } from "../../widgets/FormOrder/FormOrder.tsx";
import { Basket } from "../../widgets/Basket/Basket.tsx";

export const MainPage = () => {
  const selectedCard = useSelector((state) => state.modal.payload);

  const open = useSelector((state) => state.modal.isOpen);
  const type = useSelector((state) => state.modal.type);

  console.log("open", open);
  console.log("type:", type);

  const product = useSelector((state) => state.products.products[selectedCard]);
  const dispatch = useDispatch();

  return (
    <main className={styles.container}>
      {open && (
        <Modal isOpen={open} onClose={() => dispatch(closeModal())}>
          {type === "basket" && <Basket />}
          {type === "card" && (
            <CardModal
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
              id={product.id}
              description={product.description}
            />
          )}
          {type === "form" && <FormOrder />}
        </Modal>
      )}
      <Gallery />
    </main>
  );
};
