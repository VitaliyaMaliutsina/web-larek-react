import styles from "./formContacts.module.scss";
import { Form } from "../../shared/ui/Form/Form.tsx";
import { Input } from "../../shared/ui/Input/Input.tsx";
import { Label } from "../../shared/ui/Label/Label.tsx";
import { Button } from "../../shared/ui/Button/Button.tsx";
import { setCheckoutStep } from "../../entities/modal/model/modalSlice.ts";
import { useDispatch } from "../../app/store/store.ts";

export const FormContacts = () => {
  const dispatch = useDispatch();
  return (
    <Form className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.inputContainer}>
          <Label htmlFor={"email"}>Email </Label>
          <Input id={"email"} placeholder={"Введите Email"} />
        </div>

        <div className={styles.inputContainer}>
          <Label htmlFor={"tel"}>Телефон</Label>
          <Input id={"tel"} placeholder={"Введите номер телефона"} />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button>Оформить</Button>
        <span>Проверьте данные!</span>
        <Button onClick={() => dispatch(setCheckoutStep({ step: "order" }))}>Назад</Button>
      </div>
    </Form>
  );
};
