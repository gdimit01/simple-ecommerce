import { useState, useCallback } from 'react';

interface UseNotificationReturn {
  showAlert: boolean;
  alertMessage: string;
  notify: (message: string, duration?: number) => void;
  closeAlert: () => void;
}

export const useNotification = (defaultDuration = 3000): UseNotificationReturn => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const closeAlert = useCallback(() => {
    setShowAlert(false);
    setAlertMessage('');
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }, [timeoutId]);

  const notify = useCallback((message: string, duration = defaultDuration) => {
    setAlertMessage(message);
    setShowAlert(true);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      closeAlert();
    }, duration);

    setTimeoutId(newTimeoutId);
  }, [closeAlert, defaultDuration, timeoutId]);

  return {
    showAlert,
    alertMessage,
    notify,
    closeAlert
  };
}; 