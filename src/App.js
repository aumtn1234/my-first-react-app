import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="app-container">
      {isLogin ? (
        <LoginForm switchToRegister={() => setIsLogin(false)} />
      ) : (
        <RegisterForm switchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default App;
