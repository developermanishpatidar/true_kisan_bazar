import React from 'react';
import { useAdmin } from '../context/AdminContext';

const ToastNotification = () => {
  const { toasts, removeToast } = useAdmin();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="adm-toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`adm-toast adm-toast--${toast.type}`}>
          <div style={{ flex: 1 }}>{toast.message}</div>
          <button
            onClick={() => removeToast(toast.id)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#64748b',
              fontWeight: '700',
              padding: '0 4px'
            }}
            aria-label="Dismiss notification"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastNotification;
