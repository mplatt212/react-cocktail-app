import React, { useEffect } from "react";

const Alert = ({ alertStatus, showAlert }) => {
  const { type, msg } = alertStatus;

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      showAlert("", "", false);
    }, 3000);

    return () => {
      clearTimeout(alertTimeout);
    };
  }, [alertStatus, showAlert]);

  return (
    <div className={type}>
      <h4>{msg}</h4>
    </div>
  );
};

export default Alert;
