import { API_URL, CDN_URL } from "../constants/constants.ts";
import type { IProduct, IProductsData } from "../types/types.ts";

export const getCards = async (): Promise<IProduct[]> => {
  const response = await fetch(`${API_URL}/product/`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }

  const data: IProductsData = await response.json();

  const products = data.items.map((card) => {
    const newImg = card.image.replace("svg", "png");
    const newCard = {
      ...card,
      image: CDN_URL + newImg,
    };
    return newCard;
  });
  return products;
};
