import { z } from "zod";

export const orderSchema = z.object({
  address: z.string().trim().nonempty("Поле адресса не может быть пустым"),
  payment: z.enum(["online", "cash"], { error: "Выберите способ оплаты" }),
});

export const contactsSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email не может быть пустым")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Некорректный email"),
  phone: z.string().trim().nonempty("Введите номер телефона"),
});
