import { useSelector } from "../../app/store/store.ts";
import { FormOrder } from "../FormOrder/FormOrder.tsx";
import { FormContacts } from "../FormContacts/FormContacts.tsx";
import { Success } from "../orderSubmitStatus/Success/Success.tsx";
import { ErrorStatus } from "../orderSubmitStatus/ErrorStatus/ErrorStatus.tsx";

export const Checkout = () => {
  const step = useSelector((state) => state.modal.step);
  const orderStatus = useSelector((state) => state.order);
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
        if (orderStatus.isSuccess) {
          content = <Success />;
        } else if (orderStatus.isPending) {
          content = <div>Loading...</div>;
        } else if (orderStatus.isError) {
          content = <ErrorStatus />;
        } else {
          content = null;
        }
      }
      break;
    default:
      content = null;
  }

  return <>{content}</>;
};
