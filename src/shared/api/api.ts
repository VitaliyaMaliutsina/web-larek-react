import { API_URL, CDN_URL } from "../constants/constants.ts";
import type { TProduct, TProductsData, TOrder } from "../types/types.ts";

type TOrderPromise = {
  id: string;
  total: number;
};

export const getCards = async (): Promise<TProduct[]> => {
  const response = await fetch(`${API_URL}/product/`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }

  const data: TProductsData = await response.json();

  const products: TProduct[] = data.items.map((card: TProduct) => {
    const newImg: string = card.image.replace("svg", "png");
    const newCard = {
      ...card,
      image: CDN_URL + newImg,
    };
    return newCard;
  });
  return products;
};

export const createOrder = async (order: TOrder) => {
  const response = await fetch(`${API_URL}/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });

  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }

  const data: TOrderPromise = await response.json();

  return data;
};
