import React, { useState } from "react";
import "../App.css";

function LoginForm({ switchToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ตัวอย่างข้อมูลจำลอง
    const userData = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = userData.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      alert(`เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับ ${foundUser.fullname}`);
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div className="login-container">
      <h2>เข้าสู่ระบบ</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-text">{error}</p>}
        <button type="submit">เข้าสู่ระบบ</button>
      </form>
      <p className="switch-text">
        ยังไม่มีบัญชี?{" "}
        <span className="link" onClick={switchToRegister}>
          สมัครสมาชิก
        </span>
      </p>
    </div>
  );
}

export default LoginForm;
