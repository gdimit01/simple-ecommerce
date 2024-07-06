import React from "react";
import { Product } from "../types";

interface ProductGridProps {
  products: Product[];
  setSelectedProduct: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  setSelectedProduct,
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white rounded-lg shadow-md overflow-hidden border border-pink-200"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-light text-lg mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4 h-20 overflow-hidden">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">£{product.price}</span>
            <button
              onClick={() => setSelectedProduct(product)}
              className="bg-pink-400 hover:bg-pink-500 text-white font-light py-2 px-4 rounded transition duration-300"
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);
