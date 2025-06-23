import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  const handleError = (msg) => {
    toast.error(msg, {
      position: "bottom-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await axios.post(
        "https://zerodha-clone-backend-i5le.onrender.com/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.data.status) {
        handleSuccess("Login successful!");
        localStorage.setItem("authToken", res.data.token);

        // Option 1: Internal route (if dashboard is in your app)
        // navigate("/dashboard");

        // Option 2: External redirect (your current usage)
        setTimeout(() => {
          window.location.href = "https://zerodha-clone-tjhm.vercel.app/";
        }, 1000);
      } else {
        handleError(res.data.message || "Invalid credentials");
      }

      setInputValue({ email: "", password: "" });
    } catch (err) {
      handleError("Something went wrong. Try again!");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form_container">
      
      <h2 className="mt-4">Login To TradeNova</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            autoComplete="email"
            autoFocus
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            autoComplete="current-password"
            required
          />
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#007BFF" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        <span>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#007BFF" }}>
            Signup
          </Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
