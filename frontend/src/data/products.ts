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
    price: 24.99,
    category: "Headwear",
    image: blueCapImage,
    description:
      "A stylish blue cap perfect for sunny days. Made with breathable material for maximum comfort.",
  },
  {
    id: 2,
    name: "Grey Cap",
    price: 22.99,
    category: "Headwear",
    image: greyCapImage,
    description:
      "Classic grey cap with adjustable strap. Suitable for casual wear or sports activities.",
  },
  {
    id: 3,
    name: "Black Cap",
    price: 23.99,
    category: "Headwear",
    image: blackCapImage,
    description:
      "Sleek black cap with embroidered logo. A versatile addition to any wardrobe.",
  },
  {
    id: 4,
    name: "Oyster Watch",
    price: 299.99,
    category: "Watches",
    image: oysterWatchImage,
    description: "Elegant Oyster watch with premium stainless steel construction and water resistance up to 100m.",
  },
  {
    id: 5,
    name: "Classic Cyberdeck",
    price: 499.99,
    category: "Electronics",
    image: cyberDeckImage,
    description:
      "High-performance portable computing platform with mechanical keyboard and customizable modules.",
  },
  {
    id: 6,
    name: "Gold Watch",
    price: 449.99,
    category: "Watches",
    image: goldWatchImage,
    description: "Luxurious gold-plated watch with premium Swiss movement and sapphire crystal.",
  },
];
