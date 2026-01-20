import styles from "./success.module.scss";
import { Button } from "../../../shared/ui/Button/Button.tsx";
type Props = {};
export const Success = (props: Props) => {
  const {} = props;

  return (
    <div className={styles.success}>
      <div className={styles.successImg}></div>
      <h3>Заказ оформлен</h3>
      <p>Списано 150 000 синапсов</p>
      <Button>За покупками</Button>
    </div>
  );
};
