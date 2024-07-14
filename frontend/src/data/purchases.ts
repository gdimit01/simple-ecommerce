// purchases.ts
export interface Purchase {
  productId: number;
  quantity: number;
  date: string;
  price: number;
  name: string;
}

const purchases: Purchase[] = [
  {
    productId: 1,
    quantity: 2,
    date: "2023-03-01",
    price: 9.99,
    name: "Product X",
  },
  {
    productId: 2,
    quantity: 1,
    date: "2023-03-05",
    price: 14.99,
    name: "Product Y",
  },
  {
    productId: 3,
    quantity: 3,
    date: "2023-03-10",
    price: 19.99,
    name: "Product Z",
  },
];

export default purchases;
