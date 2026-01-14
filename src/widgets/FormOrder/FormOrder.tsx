import styles from "./formOrder.module.scss";
import { Form } from "../../shared/ui/Form/Form.tsx";
import { Input } from "../../shared/ui/Input/Input.tsx";
import { Button } from "../../shared/ui/Button/Button.tsx";
import { Label } from "../../shared/ui/Label/Label.tsx";
export const FormOrder = () => {
  return (
    <Form className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.orderTypeContainer}>
          <p className={styles.orderType}>Способ оплаты</p>
          <Button>Онлайн</Button>
          <Button>При получении</Button>
        </div>

        <div className={styles.addressContainer}>
          <Label htmlFor="address">Адрес доставки</Label>
          <Input id={"address"} type={"text"} placeholder={"Введите адрес"} />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button>Далее</Button>
        <span>Необходимо указать адрес</span>
      </div>
    </Form>
  );
};
