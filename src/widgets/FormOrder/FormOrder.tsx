import styles from "./formOrder.module.scss";
import { Form } from "../../shared/ui/Form/Form.tsx";
import { Input } from "../../shared/ui/Input/Input.tsx";
import { Button } from "../../shared/ui/Button/Button.tsx";
import { Label } from "../../shared/ui/Label/Label.tsx";
import { useDispatch } from "../../app/store/store.ts";
import { setCheckoutStep } from "../../entities/modal/model/modalSlice.ts";
import { setPaymentMethod, setAddress } from "../../entities/order/model/orderSlice.ts";
import { type ChangeEvent, useState } from "react";

export const FormOrder = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    address: "",
    payment: "",
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setFormValues((prev) => ({ ...prev, address: value }));
  };

  const goToContactsStep = () => {
    dispatch(setAddress({ address: formValues.address }));
    dispatch(setCheckoutStep({ step: "contacts" }));
  };

  return (
    <Form className={styles.form}>
      <div className={styles.containerButtonBack}>
        <Button className={styles.buttonBack} onClick={() => dispatch(setCheckoutStep({ view: "basket" }))}>
          <span className="visuallyHidden">Назад</span>
        </Button>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.orderTypeContainer}>
          <p className={styles.orderType}>Способ оплаты</p>

          <label htmlFor="cash" className={styles.radioLabel}>
            <span>При получении</span>
            <input
              type={"radio"}
              name={"payment"}
              id={"cash"}
              className={"visuallyHidden"}
              onChange={() => dispatch(setPaymentMethod({ payment: "cash" }))}
            />
          </label>

          <label htmlFor="online" className={styles.radioLabel}>
            <span>Онлайн</span>
            <input
              type={"radio"}
              name={"payment"}
              id={"online"}
              className={"visuallyHidden"}
              onChange={() => dispatch(setPaymentMethod({ payment: "online" }))}
            />
          </label>
        </div>

        <div className={styles.addressContainer}>
          <Label htmlFor="address">
            Адрес доставки <span aria-hidden>*</span>
          </Label>
          <Input
            id={"address"}
            type={"text"}
            placeholder={"Введите адрес"}
            value={formValues.address}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button onClick={goToContactsStep}>Далее</Button>
        <span></span>
      </div>
    </Form>
  );
};
