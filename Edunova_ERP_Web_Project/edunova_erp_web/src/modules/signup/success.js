
import React, { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    document.title = "Verification Successful";
  }, []);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      fontFamily: "Arial"
    }}>
      <h1 style={{ color: "green", fontSize: "32px" }}>Email Verified Successfully!</h1>
      <p style={{ fontSize: "20px", marginTop: "10px" }}>
        Your account has been activated.
      </p>
    </div>
  );
}