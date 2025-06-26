import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const email = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      login(storedUser.fullName);
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form d-flex flex-column justify-content-center">
        <h2 className="text-center mb-3">Please Login to continue..</h2>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          type="button"
          className="btn btn-dark w-50 btnSpace"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
