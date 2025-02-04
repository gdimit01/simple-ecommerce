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
import { SalesData } from "../types";

interface AdminDashboardProps {
  salesData: SalesData[];
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ salesData }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="mb-4 text-2xl font-light text-pink-500">Admin Dashboard</h2>
    <div className="mb-6">
      <h3 className="mb-2 text-xl font-light">Sales Overview</h3>
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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="p-4 bg-pink-100 rounded-lg">
        <h4 className="mb-2 font-light">Total Sales</h4>
        <p className="text-2xl font-bold">
          £{salesData.reduce((sum, data) => sum + data.sales, 0).toFixed(2)}
        </p>
      </div>
      <div className="p-4 bg-blue-100 rounded-lg">
        <h4 className="mb-2 font-light">Products Sold</h4>
        <p className="text-2xl font-bold">
          {Math.floor(
            salesData.reduce((sum, data) => sum + data.sales, 0) / 20
          )}
        </p>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
