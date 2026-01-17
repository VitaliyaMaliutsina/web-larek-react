import styles from "./header.module.scss";
import { Button } from "../../shared/ui/Button/Button.tsx";
import { useDispatch, useSelector } from "../../app/store/store.ts";
import { Logo } from "../../shared/ui/Logo/Logo.tsx";
import { openModal } from "../../entities/modal/model/modalSlice.ts";

export const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.basket.items);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapperContent}>
          <Logo />

          <Button className={styles.basket} onClick={() => dispatch(openModal({ view: "basket" }))}>
            <span className={styles.basketCount}>{count.length}</span>
          </Button>
        </div>
      </header>
    </>
  );
};
