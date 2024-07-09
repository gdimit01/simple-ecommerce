import { CheckCircle, X } from "lucide-react";
import React from "react";

interface AlertProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ show, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50">
      <div className="relative p-5 bg-white border rounded-md shadow-lg w-96">
        <button
          onClick={onClose}
          className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="mt-2 text-lg font-medium leading-6 text-gray-900">
            Success
          </h3>
          <div className="py-3 mt-2 px-7">
            <p className="text-sm text-gray-500">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
