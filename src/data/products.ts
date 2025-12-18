export interface Product {
  id: string;
  model: string;
  storage: string;
  condition: "Novo" | "Seminovo";
  price: number;
  image: string;
}

export const products: Product[] = [
  // iPhone 17 Series
  {
    id: "17-pro-max",
    model: "iPhone 17 Pro Max",
    storage: "256GB",
    condition: "Novo",
    price: 12999,
    image: "/iphone-17-pro-max.png",
  },
  {
    id: "17-pro",
    model: "iPhone 17 Pro",
    storage: "256GB",
    condition: "Novo",
    price: 10999,
    image: "/iphone-17-pro.png",
  },
  {
    id: "17",
    model: "iPhone 17",
    storage: "128GB",
    condition: "Novo",
    price: 8999,
    image: "/iphone-17.png",
  },
  // iPhone 16 Series
  {
    id: "16-pro-max",
    model: "iPhone 16 Pro Max",
    storage: "256GB",
    condition: "Novo",
    price: 9999,
    image: "/iphone-16-pro-max.png",
  },
  {
    id: "16-pro",
    model: "iPhone 16 Pro",
    storage: "128GB",
    condition: "Novo",
    price: 8499,
    image: "/iphone-16-pro.png",
  },
  {
    id: "16",
    model: "iPhone 16",
    storage: "128GB",
    condition: "Novo",
    price: 6999,
    image: "/iphone-16.png",
  },
  // iPhone 15 Series
  {
    id: "15-pro-max",
    model: "iPhone 15 Pro Max",
    storage: "256GB",
    condition: "Seminovo",
    price: 6499,
    image: "/iphone-15-pro-max.png",
  },
  {
    id: "15-pro",
    model: "iPhone 15 Pro",
    storage: "128GB",
    condition: "Seminovo",
    price: 5299,
    image: "/iphone-15-pro.png",
  },
  // iPhone 14 Series
  {
    id: "14-pro",
    model: "iPhone 14 Pro",
    storage: "256GB",
    condition: "Seminovo",
    price: 4799,
    image: "/iphone-14-pro.png",
  },
  {
    id: "14",
    model: "iPhone 14",
    storage: "128GB",
    condition: "Seminovo",
    price: 3599,
    image: "/iphone-14.png",
  },
  // iPhone 13 Series
  {
    id: "13",
    model: "iPhone 13",
    storage: "128GB",
    condition: "Seminovo",
    price: 2899,
    image: "/iphone-13.png",
  },
  // iPhone 12 Series
  {
    id: "12",
    model: "iPhone 12",
    storage: "64GB",
    condition: "Seminovo",
    price: 2199,
    image: "/iphone-12.png",
  },
  // iPhone 11 Series
  {
    id: "11-pro-max",
    model: "iPhone 11 Pro Max",
    storage: "256GB",
    condition: "Seminovo",
    price: 2499,
    image: "/iphone-11-pro-max.png",
  },
  {
    id: "11-pro",
    model: "iPhone 11 Pro",
    storage: "128GB",
    condition: "Seminovo",
    price: 2199,
    image: "/iphone-11-pro.png",
  },
  {
    id: "11",
    model: "iPhone 11",
    storage: "64GB",
    condition: "Seminovo",
    price: 1799,
    image: "/iphone-11.png",
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(price);
};
