import { CheckCircle } from "lucide-react";
import React from "react";

interface AlertProps {
  message: string;
}

export const Alert: React.FC<AlertProps> = ({ message }) => (
  <div
    className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
    role="alert"
  >
    <CheckCircle className="inline-block mr-2" />
    <span className="block sm:inline">{message}</span>
  </div>
);
