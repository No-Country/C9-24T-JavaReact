import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import { Alert } from "@mui/material/";

export function MyAlert({ type, delay, msg }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div
      role="alert"
      style={{
        display: visible ? "block" : "none",
        position: "absolute",
        top: "60px",
      }}
    >
      <Alert severity={type}>{msg}</Alert>
    </div>
  );
}
