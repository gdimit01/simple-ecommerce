import { Check } from "lucide-react";
import React, { useEffect } from "react";

interface AlertProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ show, message, onClose }) => {
  // Always render the component for debugging
  if (!show) return null;

  // Log when the component renders or updates
  useEffect(() => {
    console.log("Alert rendered. Show:", show, "Message:", message);
  }, [show, message]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50">
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
        {/* Green success bar with check icon */}
        <div className="flex items-center justify-center p-4 bg-green-500">
          <Check className="w-8 h-8 text-white" />
        </div>

        {/* Alert content */}
        <div className="p-4 text-center">
          <h2 className="mb-2 text-xl font-bold">Great!</h2>
          <p className="mb-4 text-gray-600">{message}</p>
        </div>

        {/* Close button */}
        <div className="flex justify-center px-4 pb-4">
          <button
            onClick={() => {
              console.log("Close button clicked");
              onClose();
            }}
            className="px-12 py-2 text-white transition duration-200 bg-red-500 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
