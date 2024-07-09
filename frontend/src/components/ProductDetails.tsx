import { Minus, Plus, X } from "lucide-react";
import React, { useState } from "react";
import { Product } from "../types";

interface ProductDetailsProps {
  product: Product;
  addToCart: (product: Product, quantity: number) => void;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  addToCart,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl">
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-pink-500"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full mb-4 rounded-lg md:w-1/2 md:mb-0 md:mr-6"
          />
          <div className="md:w-1/2">
            <h2 className="mb-4 text-3xl font-light">{product.name}</h2>
            <p className="mb-4 text-gray-600">{product.description}</p>
            <p className="mb-6 text-2xl font-bold">£{product.price}</p>
            <div className="flex items-center mb-6 space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 font-light text-pink-800 bg-pink-200 rounded-l hover:bg-pink-300"
              >
                <Minus size={20} />
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 font-light text-pink-800 bg-pink-200 rounded-r hover:bg-pink-300"
              >
                <Plus size={20} />
              </button>
            </div>
            <button
              onClick={() => {
                addToCart(product, quantity);
                onClose();
              }}
              className="w-full px-4 py-2 font-light text-white transition duration-300 bg-pink-400 rounded hover:bg-pink-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
