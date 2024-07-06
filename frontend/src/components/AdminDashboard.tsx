import React from "react";
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

interface SalesData {
  name: string;
  sales: number;
}

interface AdminDashboardProps {
  salesData: SalesData[];
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  salesData,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-light text-pink-500 mb-4">Admin Dashboard</h2>
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
