import { useSelector } from "../../app/store/store.ts";
import { FormOrder } from "../FormOrder/FormOrder.tsx";
import { FormContacts } from "../FormContacts/FormContacts.tsx";

export const Checkout = () => {
  const step = useSelector((state) => state.modal.step);
  let content;

  switch (step) {
    case "order":
      {
        content = <FormOrder />;
      }
      break;
    case "contacts":
      {
        content = <FormContacts />;
      }
      break;
    case "success":
      {
        content = null;
      }
      break;
    default:
      content = null;
  }

  return <>{content}</>;
};
