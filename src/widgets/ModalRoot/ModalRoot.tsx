import { Modal } from "../Modal/Modal.tsx";
import { closeModal } from "../../entities/modal/model/modalSlice.ts";
import { Basket } from "../Basket/Basket.tsx";
import { CardModal } from "../CardModal/CardModal.tsx";
import { useDispatch, useSelector } from "../../app/store/store.ts";
import { Checkout } from "../Checkout/Checkout.tsx";

export const ModalRoot = () => {
  const selectedCard = useSelector((state) => state.modal.payload);

  const open = useSelector((state) => state.modal.isOpen);
  const view = useSelector((state) => state.modal.view);

  const product = useSelector((state) => state.products.products[selectedCard]);
  const dispatch = useDispatch();

  let content;

  switch (view) {
    case "card":
      content = (
        <CardModal
          title={product.title}
          price={product.price}
          category={product.category}
          image={product.image}
          id={product.id}
          description={product.description}
        />
      );
      break;
    case "basket":
      content = <Basket />;
      break;
    case "checkout":
      content = <Checkout />;
      break;
    default:
      content = null;
  }

  return (
    <>
      {open && (
        <Modal isOpen={open} onClose={() => dispatch(closeModal())}>
          {content}
        </Modal>
      )}
    </>
  );
};
