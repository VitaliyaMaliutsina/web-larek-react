import styles from "./header.module.scss";
import { Button } from "../../shared/ui/Button/Button.tsx";
import { useDispatch, useSelector } from "../../app/store/store.ts";
import { Logo } from "../../shared/ui/Logo/Logo.tsx";
import { openModal } from "../../entities/modal/model/modalSlice.ts";
import { ThemeToggle } from "../../entities/theme/ui/themeToggle/ThemeToggle.tsx";

export const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.basket.items);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapperContent}>
          <Logo />
          <div>
            <ThemeToggle />
            <Button variant={"basket"} onClick={() => dispatch(openModal({ view: "basket" }))}>
              <span className={styles.basketCount}>{count.length}</span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
