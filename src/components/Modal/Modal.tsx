import styles from "./modal.module.scss";
import { createPortal } from "react-dom";
import { type ReactNode, useEffect, useRef } from "react";

type TModalProps = React.ComponentProps<"dialog"> & {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
export const Modal = (props: TModalProps) => {
  const { children, onClick, isOpen, onClose } = props;
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClick = (evt: PointerEvent) => {
      if (evt.target === modalRef.current) {
        modalRef.current?.close();
      }
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const container = document.getElementById("modal");
  if (!container) return null;
  return createPortal(
    <dialog onClick={onClick} ref={modalRef} onClose={onClose}>
      {children}
    </dialog>,
    container,
  );
};
