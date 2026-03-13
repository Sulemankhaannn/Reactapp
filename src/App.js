import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2",
    fontFamily: "Arial"
  };

  const boxStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "300px"
  };

  const inputStyle = {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div style={containerStyle}>
        <div style={boxStyle}>
          <h1>Welcome Home 🎉</h1>
          <p>You are successfully logged in.</p>
          <button style={buttonStyle} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2>Login Page</h2>
        <input type="text" placeholder="Username" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        <button style={buttonStyle} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default App;