import { useState } from "react";
import { loginverifei } from "./loginverifie";
import { useNavigate } from "react-router-dom";
import "./login_p.css"

function Loginpage() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(){

    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }
      await loginverifei(email,password,navigate)
    
  }

 return (
  <div className="login-container">
    <div className="login-box">
      <h1>Welcome To Login</h1>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  </div>
);

}

export default Loginpage;
