import React, { useState } from "react";
import "../App.css";

function RegisterForm({ switchToLogin }) {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirm) {
      setError("รหัสผ่านไม่ตรงกัน");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExist = existingUsers.some((u) => u.username === username);

    if (isUserExist) {
      setError("มีชื่อผู้ใช้นี้อยู่แล้ว");
      return;
    }

    const newUser = { fullname, username, password };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    setSuccess("สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ");
    setFullname("");
    setUsername("");
    setPassword("");
    setConfirm("");
  };

  return (
    <div className="login-container">
      <h2>สมัครสมาชิก</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ชื่อ-นามสกุล"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="ยืนยันรหัสผ่าน"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}
        <button type="submit">สมัครสมาชิก</button>
      </form>
      <p className="switch-text">
        มีบัญชีอยู่แล้ว?{" "}
        <span className="link" onClick={switchToLogin}>
          กลับไปเข้าสู่ระบบ
        </span>
      </p>
    </div>
  );
}

export default RegisterForm;
