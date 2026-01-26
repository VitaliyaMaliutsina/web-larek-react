import styles from "./formContacts.module.scss";
import { Form } from "../../shared/ui/Form/Form.tsx";
import { Input } from "../../shared/ui/Input/Input.tsx";
import { Label } from "../../shared/ui/Label/Label.tsx";
import { Button } from "../../shared/ui/Button/Button.tsx";
import { setCheckoutStep } from "../../entities/modal/model/modalSlice.ts";
import { useDispatch, useSelector } from "../../app/store/store.ts";
import { useState } from "react";
import { createUserOrder } from "../../entities/order/model/createUserOrder.ts";
import { contactsSchema } from "../../shared/validation/order.schema.ts";
import { treeifyError } from "zod";

export const FormContacts = () => {
  const dispatch = useDispatch();

  const order = useSelector((state) => state.order);
  const items = useSelector((state) => state.basket.items);

  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [error, setError] = useState<Record<string, string | undefined>>({
    email: "",
    phone: "",
  });
  const handleCreateOrder = () => {
    const fullOrder = {
      payment: order.payment,
      address: order.address,
      total: order.total,
      phone: phoneValue,
      email: emailValue,
      items: items,
    };
    const result = contactsSchema.safeParse({ email: emailValue, phone: phoneValue });
    if (result.success) {
      dispatch(createUserOrder(fullOrder));
      dispatch(setCheckoutStep({ step: "success" }));
    } else {
      const errors = treeifyError(result.error);
      setError({
        email: errors.properties?.email?.errors[0],
        phone: errors.properties?.phone?.errors[0],
      });
    }
  };

  return (
    <Form>
      <div className={styles.containerButtonBack}>
        <Button variant={"back"} onClick={() => dispatch(setCheckoutStep({ step: "order" }))}>
          <span className="visuallyHidden">Назад</span>
        </Button>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.inputContainer}>
          <Label htmlFor={"email"}>Email </Label>
          <Input
            autoComplete={"email"}
            id={"email"}
            placeholder={"Введите Email"}
            value={emailValue}
            onChange={(evt) => setEmailValue(evt.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <Label htmlFor={"phone"}>Телефон</Label>
          <Input
            autoComplete={"tel"}
            id={"phone"}
            placeholder={"Введите номер телефона"}
            value={phoneValue}
            onChange={(evt) => setPhoneValue(evt.target.value)}
          />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button onClick={handleCreateOrder}>Оформить</Button>
        <span>{error.email || error.phone}</span>
      </div>
    </Form>
  );
};
