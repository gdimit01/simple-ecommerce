import React, { useEffect, useState } from "react";
import { products } from "../data/products";
import { Product } from "../types";
import Alert from "./Alert";
import ProductDetails from "./ProductDetails";
import ProductGrid from "./ProductGrid";

const ProductPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const addToCart = (product: Product, quantity: number) => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
    setAlertMessage(`Added ${quantity} ${product.name}(s) to cart`);
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Close after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-light text-pink-500">Our Products</h1>
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
      <Alert show={showAlert} message={alertMessage} onClose={closeAlert} />
    </>
  );
};

export default ProductPage;
