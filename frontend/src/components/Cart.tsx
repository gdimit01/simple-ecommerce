import { Minus, Plus } from "lucide-react";
import React from "react";
import { CartItem } from "../types"; // Ensure this import path is correct

// Define the props for the Cart component
interface CartProps {
  cart: CartItem[];
  updateQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (productId: number) => void;
  handleCheckout: () => void;
}

// Define the Cart component
const Cart: React.FC<CartProps> = ({
  cart,
  updateQuantity,
  removeFromCart,
  handleCheckout,
}) => {
  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Proceed to checkout function
  const proceedToCheckout = async () => {
    const purchases = cart.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
      date: new Date().toISOString(),
      name: item.name,
      price: item.price,
    }));

    const response = await fetch("http://localhost:3000/api/purchases/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ purchases }),
    });

    if (response.ok) {
      handleCheckout(); // Call the handleCheckout prop after successful purchase
    } else {
      console.error("Failed to proceed to checkout");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-light text-pink-500">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between pb-4 mb-4 border-b"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-16 h-16 mr-4 rounded"
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
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.quantity > 1 ? item.quantity - 1 : 1
                    )
                  }
                  className="p-1 text-pink-800 bg-pink-200 rounded hover:bg-pink-300"
                >
                  <Minus size={16} />
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 text-pink-800 bg-pink-200 rounded hover:bg-pink-300"
                >
                  <Plus size={16} />
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-1 text-white bg-red-400 rounded hover:bg-red-500"
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
            onClick={proceedToCheckout}
            className="px-4 py-2 mt-4 font-light text-white transition duration-300 bg-pink-400 rounded hover:bg-pink-500"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
