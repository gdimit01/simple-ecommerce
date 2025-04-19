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
import { useCart } from "./hooks/useCart";
import { useNotification } from "./hooks/useNotification";
import { Product, SalesData } from "./types";

const App: React.FC = () => {
  const [view, setView] = useState<"dashboard" | "cart" | "user" | "admin">("dashboard");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { cart, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const { showAlert, alertMessage, notify, closeAlert } = useNotification();
  const [salesData, setSalesData] = useState<SalesData[]>([
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4500 },
    { name: "May", sales: 6000 },
    { name: "Jun", sales: 5500 },
  ]);

  const handleAddToCart = (product: Product, qty: number) => {
    addToCart(product, qty);
    notify(`Successfully added ${qty} ${product.name}${qty > 1 ? "s" : ""} to cart`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      notify("Your cart is empty!", 3000);
      return;
    }

    const itemDetails = cart
      .map(item => `${item.quantity} ${item.name}${item.quantity > 1 ? "s" : ""}`)
      .join(", ");
    
    notify(
      `You have ordered: ${itemDetails}. Total: £${totalPrice.toFixed(2)}`,
      5000
    );

    const currentMonth = new Date().toLocaleString("default", { month: "short" });
    setSalesData(prevData => {
      const newData = [...prevData];
      const monthIndex = newData.findIndex(item => item.name === currentMonth);
      
      if (monthIndex !== -1) {
        newData[monthIndex].sales += totalPrice;
      } else {
        newData.push({
          name: currentMonth,
          sales: totalPrice,
        });
      }
      return newData;
    });

    clearCart();
  };

  const renderContent = () => {
    const views = {
      dashboard: (
        <div className="relative">
          <ProductGrid
            products={products}
            setSelectedProduct={setSelectedProduct}
          />
          {selectedProduct && (
            <ProductDetails
              product={selectedProduct}
              addToCart={handleAddToCart}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </div>
      ),
      cart: (
        <Cart
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          handleCheckout={handleCheckout}
        />
      ),
      user: <UserDashboard purchases={purchases} />,
      admin: <AdminDashboard salesData={salesData} />,
    };

    return views[view] || views.dashboard;
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <NavBar cartItemsCount={totalItems} setView={setView} />
      <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Alert show={showAlert} message={alertMessage} onClose={closeAlert} />
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
