import React, { useState } from "react";
import AdminDashboard from "./components/AdminDashboard";
import Alert from "./components/Alert";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import ProductGrid from "./components/ProductGrid";
import UserDashboard from "./components/UserDashboard";
import { products } from "./data/products";
import purchases from "./data/purchases";
import { CartItem, Product, SalesData } from "./types";

const App: React.FC = () => {
  const [view, setView] = useState("dashboard");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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

  const addToCart = (product: Product, qty: number) => {
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

  const handleCheckout = () => {
    const itemDetails = cart
      .map(
        (item) => `${item.quantity} ${item.name}${item.quantity > 1 ? "s" : ""}`
      )
      .join(", ");
    setAlertMessage(
      `You have ordered: ${itemDetails}. Total: £${cart
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2)}`
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
        newData[monthIndex].sales += cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      } else {
        newData.push({
          name: currentMonth,
          sales: cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          ),
        });
      }
      return newData;
    });

    setCart([]);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const renderContent = () => {
    switch (view) {
      case "dashboard":
        return (
          <div className="relative">
            <ProductGrid
              products={products}
              setSelectedProduct={setSelectedProduct}
            />
            {selectedProduct && (
              <ProductDetails
                product={selectedProduct}
                addToCart={addToCart}
                onClose={() => setSelectedProduct(null)}
              />
            )}
          </div>
        );
      case "cart":
        return (
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            handleCheckout={handleCheckout}
          />
        );
      case "user":
        return <UserDashboard purchases={purchases} />; // Pass the purchases array as a prop
      case "admin":
        return <AdminDashboard salesData={salesData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <NavBar cartItemsCount={cart.length} setView={setView} />
      <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Alert show={showAlert} message={alertMessage} onClose={closeAlert} />
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
