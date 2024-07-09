// src/data/products.ts

import blackCapImage from "../assets/black-cap2.jpeg";
import cyberDeckImage from "../assets/cyber-deck.jpeg";
import goldWatchImage from "../assets/gold-watch.jpeg";
import greyCapImage from "../assets/grey-cap.jpeg";
import oysterWatchImage from "../assets/oyster-watch.jpeg";
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
  {
    id: 4,
    name: "Oyster watch",
    price: 20,
    image: oysterWatchImage,
    description: "Sleek Oyster watch.",
  },
  {
    id: 5,
    name: "Classic Cyberdeck",
    price: 20,
    image: cyberDeckImage,
    description:
      "Sleek black cap with embroidered logo. A versatile addition to any wardrobe.",
  },
  {
    id: 6,
    name: "Gold Watch",
    price: 20,
    image: goldWatchImage,
    description: "Sleek gold watch.",
  },
];
