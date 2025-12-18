export interface Product {
  id: string;
  model: string;
  storage: string;
  condition: "Novo" | "Seminovo";
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    model: "iPhone 15 Pro Max",
    storage: "256GB",
    condition: "Seminovo",
    price: 6499,
    image: "/iphone-15-pro-max.png",
  },
  {
    id: "2",
    model: "iPhone 15 Pro",
    storage: "128GB",
    condition: "Seminovo",
    price: 5299,
    image: "/iphone-15-pro.png",
  },
  {
    id: "3",
    model: "iPhone 14 Pro",
    storage: "256GB",
    condition: "Seminovo",
    price: 4799,
    image: "/iphone-14-pro.png",
  },
  {
    id: "4",
    model: "iPhone 14",
    storage: "128GB",
    condition: "Seminovo",
    price: 3599,
    image: "/iphone-14.png",
  },
  {
    id: "5",
    model: "iPhone 13",
    storage: "128GB",
    condition: "Seminovo",
    price: 2899,
    image: "/iphone-13.png",
  },
  {
    id: "6",
    model: "iPhone 12",
    storage: "64GB",
    condition: "Seminovo",
    price: 2199,
    image: "/iphone-12.png",
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(price);
};
