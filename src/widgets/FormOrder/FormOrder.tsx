import styles from "./formOrder.module.scss";
import { Form } from "../../shared/ui/Form/Form.tsx";
import { Input } from "../../shared/ui/Input/Input.tsx";
import { Button } from "../../shared/ui/Button/Button.tsx";
import { Label } from "../../shared/ui/Label/Label.tsx";
import { useDispatch, useSelector } from "../../app/store/store.ts";
import { setCheckoutStep } from "../../entities/modal/model/modalSlice.ts";
import { handleAddress, handlePaymentMethod } from "../../entities/order/model/orderSlice.ts";
import { type ChangeEvent, useState } from "react";

export const FormOrder = () => {
  const dispatch = useDispatch();

  const methodType = useSelector((state) => state.order.payment);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const goToContactsStep = () => {
    dispatch(handleAddress(inputValue));
    dispatch(setCheckoutStep({ step: "contacts" }));
  };

  return (
    <Form className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.orderTypeContainer}>
          <p className={styles.orderType}>Способ оплаты</p>
          <Button
            className={methodType === "online" ? styles.activeButton : undefined}
            onClick={() => dispatch(handlePaymentMethod("online"))}
          >
            Онлайн
          </Button>
          <Button
            className={methodType === "cash" ? styles.activeButton : undefined}
            onClick={() => dispatch(handlePaymentMethod("cash"))}
          >
            При получении
          </Button>
        </div>

        <div className={styles.addressContainer}>
          <Label htmlFor="address">Адрес доставки</Label>
          <Input id={"address"} type={"text"} placeholder={"Введите адрес"} onChange={handleInputChange} />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button onClick={goToContactsStep}>Далее</Button>
        <span>Необходимо указать адрес</span>
        <Button onClick={() => dispatch(setCheckoutStep({ view: "basket" }))}>Назад</Button>
      </div>
    </Form>
  );
};
