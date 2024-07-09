import React from "react";
import { Product } from "../types";

interface ProductGridProps {
  products: Product[];
  setSelectedProduct: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  setSelectedProduct,
}) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {products.map((product) => (
      <div
        key={product.id}
        className="overflow-hidden bg-white border border-pink-200 rounded-lg shadow-md"
      >
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-48"
        />
        <div className="p-4">
          <h3 className="mb-2 text-lg font-light">{product.name}</h3>
          <p className="h-20 mb-4 overflow-hidden text-gray-600">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">£{product.price}</span>
            <button
              onClick={() => setSelectedProduct(product)}
              className="px-4 py-2 font-light text-white transition duration-300 bg-pink-400 rounded hover:bg-pink-500"
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProductGrid;
