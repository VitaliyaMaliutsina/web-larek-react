import { z } from "zod";

export const orderSchema = z.object({
  address: z.string().trim().min(1, "Поле не может быть пустым"),
  payment: z.enum(["online", "cash"], { error: "Выберите способ оплаты" }),
});
