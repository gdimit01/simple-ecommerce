import React, { useEffect, useState } from "react";

interface Purchase {
  productId: number;
  quantity: number;
  date: string;
  name: string;
  price: number;
}

interface UserDashboardProps {
  purchases: Purchase[];
}

// Function to convert ISO date to human-readable format
const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleString(); // You can customize this to your locale and options
};

const UserDashboard: React.FC<UserDashboardProps> = () => {
  const [displayPurchases, setDisplayPurchases] = useState<Purchase[]>([]);

  // Fetch purchases from server
  const fetchPurchases = async () => {
    const response = await fetch("http://localhost:3000/api/purchases");
    if (response.ok) {
      const data = await response.json();
      setDisplayPurchases(data);
    } else {
      console.error("Failed to fetch purchases");
    }
  };

  useEffect(() => {
    fetchPurchases();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-light text-pink-500">User Dashboard</h2>
      <p>Welcome, User! This is your personal dashboard.</p>
      <ul className="pl-4 mt-6 list-disc">
        {displayPurchases.map((purchase) => (
          <li key={purchase.productId}>
            {purchase.name}: {purchase.quantity} x £{purchase.price} (
            {formatDate(purchase.date)})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
