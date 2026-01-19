export type TProduct = {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
  index: number;
};

type TPayment = "cash" | "online" | null;

export type TUserData = {
  payment: TPayment;
  email: string;
  phone: string;
  address: string;
};

export type TOrder = TUserData & {
  total: number;
  items: string[];
};

export type TProductBasket = {
  id: string;
  price: number | null;
  title: string;
};

export type TProductsData = {
  items: TProduct[];
  preview: string | null;
  total: number;
};

export type TBadgeVariant = "category1" | "category2" | "category3" | "category4" | "category5";

export const categorySkills: Record<string, TBadgeVariant> = {
  дополнительное: "category1",
  другое: "category2",
  кнопка: "category3",
  "софт-скил": "category4",
  "хард-скил": "category5",
};
