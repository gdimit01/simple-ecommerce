import { CheckCircle } from "lucide-react";
import React from "react";

interface AlertProps {
  show: boolean;
  message: string;
}

const Alert: React.FC<AlertProps> = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50">
      <div className="p-5 bg-white border rounded-md shadow-lg w-96">
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
