// src/data/products.ts

import blackCapImage from "../assets/black-cap2.jpeg";
import greyCapImage from "../assets/grey-cap.jpeg";
import blueCapImage from "../assets/pixel art cap1.jpeg";
import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Blue Cap",
    price: 20,
    image: blueCapImage,
    description:
      "A stylish blue cap perfect for sunny days. Made with breathable material for maximum comfort.",
  },
  {
    id: 2,
    name: "Grey Cap",
    price: 20,
    image: greyCapImage,
    description:
      "Classic grey cap with adjustable strap. Suitable for casual wear or sports activities.",
  },
  {
    id: 3,
    name: "Black Cap",
    price: 20,
    image: blackCapImage,
    description:
      "Sleek black cap with embroidered logo. A versatile addition to any wardrobe.",
  },
];
