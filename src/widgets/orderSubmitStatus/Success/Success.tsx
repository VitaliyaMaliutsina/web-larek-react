import styles from "./success.module.scss";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { useSelector } from "../../../app/store/store.ts";
export const Success = () => {
  const total = useSelector((state) => state.order.total);

  return (
    <div className={styles.success}>
      <div className={styles.successImg}></div>
      <h3>Заказ оформлен</h3>
      <p>Списано {total} синапсов</p>
      <Button>За покупками</Button>
    </div>
  );
};
