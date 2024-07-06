import { ArrowLeft, Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { Product } from "../types";

interface ProductDetailsProps {
  product: Product;
  addToCart: (product: Product, quantity: number) => void;
  onBack: () => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  addToCart,
  onBack,
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <button
        onClick={onBack}
        className="mb-4 flex items-center text-gray-600 hover:text-pink-500"
      >
        <ArrowLeft size={20} className="mr-2" /> Back to Dashboard
      </button>
      <div className="md:flex">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h2 className="text-2xl font-light mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-bold mb-4">£{product.price}</p>
          <div className="flex items-center space-x-4 mb-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-pink-200 hover:bg-pink-300 text-pink-800 font-light py-2 px-4 rounded-l"
            >
              <Minus size={20} />
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="bg-pink-200 hover:bg-pink-300 text-pink-800 font-light py-2 px-4 rounded-r"
            >
              <Plus size={20} />
            </button>
          </div>
          <button
            onClick={() => {
              addToCart(product, quantity);
              onBack();
            }}
            className="bg-pink-400 hover:bg-pink-500 text-white font-light py-2 px-4 rounded transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
