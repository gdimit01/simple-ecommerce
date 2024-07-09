import { BarChart2, ShoppingCart, User } from "lucide-react";
import React from "react";

interface NavBarProps {
  cartItemsCount: number;
  setView: (view: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ cartItemsCount, setView }) => (
  <nav className="p-4 bg-pink-100 shadow-md">
    <div className="flex items-center justify-between mx-auto max-w-7xl">
      <h1 className="text-2xl font-light text-pink-500">Ethereal Store</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => setView("dashboard")}
          className="text-gray-600 hover:text-pink-500"
        >
          Dashboard
        </button>
        <button
          onClick={() => setView("cart")}
          className="flex items-center text-gray-600 hover:text-pink-500"
        >
          <ShoppingCart size={20} className="mr-1" /> Cart ({cartItemsCount})
        </button>
        <button
          onClick={() => setView("user")}
          className="text-gray-600 hover:text-pink-500"
        >
          <User size={20} />
        </button>
        <button
          onClick={() => setView("admin")}
          className="text-gray-600 hover:text-pink-500"
        >
          <BarChart2 size={20} />
        </button>
      </div>
    </div>
  </nav>
);

export default NavBar;
