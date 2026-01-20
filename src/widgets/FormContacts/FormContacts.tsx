import styles from "./formContacts.module.scss";
import { Form } from "../../shared/ui/Form/Form.tsx";
import { Input } from "../../shared/ui/Input/Input.tsx";
import { Label } from "../../shared/ui/Label/Label.tsx";
import { Button } from "../../shared/ui/Button/Button.tsx";
import { setCheckoutStep } from "../../entities/modal/model/modalSlice.ts";
import { useDispatch, useSelector } from "../../app/store/store.ts";
import { useState } from "react";
import { createUserOrder } from "../../entities/order/model/createUserOrder.ts";

export const FormContacts = () => {
  const dispatch = useDispatch();

  const order = useSelector((state) => state.order);
  const items = useSelector((state) => state.basket.items);

  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const handleCreateOrder = () => {
    const fullOrder = {
      payment: order.payment,
      address: order.address,
      total: order.total,
      phone: phoneValue,
      email: emailValue,
      items: items,
    };
    dispatch(createUserOrder(fullOrder));
    dispatch(setCheckoutStep({ step: "success" }));
  };

  return (
    <Form className={styles.form}>
      <div className={styles.containerButtonBack}>
        <Button className={styles.buttonBack} onClick={() => dispatch(setCheckoutStep({ step: "order" }))}>
          <span className="visuallyHidden">Назад</span>
        </Button>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.inputContainer}>
          <Label htmlFor={"email"}>Email </Label>
          <Input
            id={"email"}
            placeholder={"Введите Email"}
            value={emailValue}
            onChange={(evt) => setEmailValue(evt.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <Label htmlFor={"tel"}>Телефон</Label>
          <Input
            id={"tel"}
            placeholder={"Введите номер телефона"}
            value={phoneValue}
            onChange={(evt) => setPhoneValue(evt.target.value)}
          />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button onClick={handleCreateOrder}>Оформить</Button>
        <span>Проверьте данные!</span>
      </div>
    </Form>
  );
};
