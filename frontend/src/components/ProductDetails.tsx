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

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-3xl overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute text-gray-600 top-4 right-4 hover:text-pink-500"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-64 md:h-full"
            />
          </div>
          <div className="p-6 md:w-1/2">
            <h2 className="mb-4 text-2xl font-light">{product.name}</h2>
            <p className="mb-4 text-gray-600">{product.description}</p>
            <p className="mb-6 text-2xl font-bold">£{product.price}</p>
            <div className="flex items-center mb-6">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-pink-800 bg-pink-200 rounded-l"
              >
                <Minus size={20} />
              </button>
              <span className="px-4 py-1 text-pink-800 bg-pink-100">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-pink-800 bg-pink-200 rounded-r"
              >
                <Plus size={20} />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full py-2 text-white transition duration-300 bg-pink-400 rounded hover:bg-pink-500"
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
