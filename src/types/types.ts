export type IProduct = {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
};

export type IProductsData = {
  items: IProduct[];
  preview: string | null;
  total: number;
};
