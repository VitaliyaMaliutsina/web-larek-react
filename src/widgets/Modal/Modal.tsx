import styles from "./modal.module.scss";
import { createPortal } from "react-dom";
import { type ReactNode, useEffect, useRef } from "react";
import { Button } from "../../shared/ui/Button/Button.tsx";

type TModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
export const Modal = (props: TModalProps) => {
  const { children, isOpen, onClose } = props;
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleClickClose = () => {
    modalRef.current?.close();
  };

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  const handleClickOut = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === modalRef.current) {
      modalRef.current?.close();
    }
  };

  const container = document.getElementById("modal");
  if (!container) return null;
  return createPortal(
    <dialog ref={modalRef} onClose={onClose} className={styles.modal} onClick={handleClickOut}>
      <Button onClick={handleClickClose} variant={"close"}>
        <span className="visuallyHidden">Закрыть модальное окно</span>
      </Button>

      {children}
    </dialog>,
    container,
  );
};
