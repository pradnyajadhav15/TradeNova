import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-clone-backend-i5le.onrender.com/signup",
        { ...inputValue },
        { withCredentials: true }
      );

      if (data.status) {
        handleSuccess("User signed up successfully!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      handleError("Something went wrong. Try again!");
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="signup container mt-5" style={{ maxWidth: "500px" }}>
      <h1 className="text-center fw-bold mb-3">
        Open a free TradeNova account
      </h1>
      <p className="text-center text-muted mb-4">
        Start investing with ₹0 brokerage and join 2M+ smart traders!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className="form-control"
            placeholder="Enter your email"
            onChange={handleOnChange}
            autoComplete="email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label fw-semibold">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            className="form-control"
            placeholder="Choose a username"
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label fw-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className="form-control"
            placeholder="Create a strong password"
            onChange={handleOnChange}
            autoComplete="new-password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-3">
          Sign up
        </button>

        <div className="text-center">
          <small>
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none">
              Login here
            </Link>
          </small>
        </div>

        <p className="text-muted mt-4 text-center" style={{ fontSize: "13px" }}>
          By proceeding, you agree to the TradeNova terms & privacy policy.
        </p>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Signup;
