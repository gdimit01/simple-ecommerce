import { Minus, Plus } from "lucide-react";
import React from "react";
import { CartItem } from "../types";

interface CartProps {
  cart: CartItem[];
  updateQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (productId: number) => void;
  totalPrice: number;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({
  cart,
  updateQuantity,
  removeFromCart,
  totalPrice,
  onCheckout,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-light text-pink-500 mb-4">Your Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-4 border-b pb-4"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div>
                <h3 className="font-light">{item.name}</h3>
                <p className="text-gray-600">
                  £{item.price} x {item.quantity}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="bg-pink-200 hover:bg-pink-300 text-pink-800 p-1 rounded"
              >
                <Minus size={16} />
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="bg-pink-200 hover:bg-pink-300 text-pink-800 p-1 rounded"
              >
                <Plus size={16} />
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-400 hover:bg-red-500 text-white p-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="mt-6 text-xl font-bold">
          Total: £{totalPrice.toFixed(2)}
        </div>
        <button
          onClick={onCheckout}
          className="mt-4 bg-pink-400 hover:bg-pink-500 text-white font-light py-2 px-4 rounded transition duration-300"
        >
          Proceed to Checkout
        </button>
      </>
    )}
  </div>
);
