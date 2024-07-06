import {
  ArrowLeft,
  BarChart2,
  CheckCircle,
  Minus,
  Plus,
  ShoppingCart,
  User,
} from "lucide-react";
import React, { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CartItem, Product, SalesData } from "../types/index"; // Adjust the import path as necessary

const products: Product[] = [
  {
    id: 1,
    name: "White Cap",
    price: 20,
    image: "/api/placeholder/300/200",
    description:
      "A stylish white cap perfect for sunny days. Made with breathable material for maximum comfort.",
  },
  {
    id: 2,
    name: "Grey Cap",
    price: 20,
    image: "/api/placeholder/300/200",
    description:
      "Classic grey cap with adjustable strap. Suitable for casual wear or sports activities.",
  },
  {
    id: 3,
    name: "Black Cap",
    price: 20,
    image: "/api/placeholder/300/200",
    description:
      "Sleek black cap with embroidered logo. A versatile addition to any wardrobe.",
  },
];

const EcommerceStore: React.FC = () => {
  const [view, setView] = useState("dashboard");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [salesData, setSalesData] = useState<SalesData[]>([
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4500 },
    { name: "May", sales: 6000 },
    { name: "Jun", sales: 5500 },
  ]);

  const addToCart = (product: Product, qty = 1) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: qty }]);
    }
    setQuantity(1);
    setAlertMessage(
      `Successfully added ${qty} ${product.name}${qty > 1 ? "s" : ""} to cart`
    );
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    const itemDetails = cart
      .map(
        (item) => `${item.quantity} ${item.name}${item.quantity > 1 ? "s" : ""}`
      )
      .join(", ");
    setAlertMessage(
      `You have ordered: ${itemDetails}. Total: £${totalPrice.toFixed(2)}`
    );
    setShowAlert(true);

    const currentMonth = new Date().toLocaleString("default", {
      month: "short",
    });
    setSalesData((prevData) => {
      const newData = [...prevData];
      const monthIndex = newData.findIndex(
        (item) => item.name === currentMonth
      );
      if (monthIndex !== -1) {
        newData[monthIndex].sales += totalPrice;
      } else {
        newData.push({ name: currentMonth, sales: totalPrice });
      }
      return newData;
    });

    setCart([]);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const NavBar: React.FC = () => (
    <nav className="bg-pink-100 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
            className="text-gray-600 hover:text-pink-500 flex items-center"
          >
            <ShoppingCart size={20} className="mr-1" /> Cart ({cart.length})
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

  const ProductGrid: React.FC = () => (
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

  const ProductDetails: React.FC = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <button
        onClick={() => setSelectedProduct(null)}
        className="mb-4 flex items-center text-gray-600 hover:text-pink-500"
      >
        <ArrowLeft size={20} className="mr-2" /> Back to Dashboard
      </button>
      <div className="md:flex">
        <img
          src={selectedProduct!.image}
          alt={selectedProduct!.name}
          className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h2 className="text-2xl font-light mb-2">{selectedProduct!.name}</h2>
          <p className="text-gray-600 mb-4">{selectedProduct!.description}</p>
          <p className="text-xl font-bold mb-4">£{selectedProduct!.price}</p>
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
              addToCart(selectedProduct!, quantity);
              setSelectedProduct(null);
            }}
            className="bg-pink-400 hover:bg-pink-500 text-white font-light py-2 px-4 rounded transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  const Cart: React.FC = () => (
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
            onClick={handleCheckout}
            className="mt-4 bg-pink-400 hover:bg-pink-500 text-white font-light py-2 px-4 rounded transition duration-300"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );

  const UserDashboard: React.FC = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-light text-pink-500 mb-4">User Dashboard</h2>
      <p>Welcome, User! This is your personal dashboard.</p>
    </div>
  );

  const AdminDashboard: React.FC = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-light text-pink-500 mb-4">
        Admin Dashboard
      </h2>
      <div className="mb-6">
        <h3 className="text-xl font-light mb-2">Sales Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#F472B6"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-pink-100 p-4 rounded-lg">
          <h4 className="font-light mb-2">Total Sales</h4>
          <p className="text-2xl font-bold">
            £{salesData.reduce((sum, data) => sum + data.sales, 0).toFixed(2)}
          </p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg">
          <h4 className="font-light mb-2">Products Sold</h4>
          <p className="text-2xl font-bold">
            {Math.floor(
              salesData.reduce((sum, data) => sum + data.sales, 0) / 20
            )}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-pink-50">
      <NavBar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {showAlert && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">
                  Success
                </h3>
                <div className="mt-2 px-7 py-3">
                  <p className="text-sm text-gray-500">{alertMessage}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {view === "dashboard" && !selectedProduct && <ProductGrid />}
        {view === "dashboard" && selectedProduct && <ProductDetails />}
        {view === "cart" && <Cart />}
        {view === "user" && <UserDashboard />}
        {view === "admin" && <AdminDashboard />}
      </div>
    </div>
  );
};

export default EcommerceStore;
