import React, { useState } from "react";
import loginn from "../Components/Assets/loginpage.jpg";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    // username: "",
    email: "",
    password: "",
    otp: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.success) {
      localStorage.setItem("auth-token", data.token);
      window.location.replace("/");
    } else {
      alert(data.errors);
    }
  };

  const signup = async () => {
    const response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.success) {
      localStorage.setItem("auth-token", data.token);
      window.location.replace("/loginsignup");
    } else {
      alert(data.errors);
    }
  };

  const requestOtp = async () => {
    const response = await fetch("http://localhost:4000/requestotp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: formData.email }),
    });
    const data = await response.json();
    if (data.success) {
      alert("OTP sent to your email.");
      setState("Enter OTP");
    } else {
      alert(data.errors);
    }
  };

  const resetPassword = async () => {
    const response = await fetch("http://localhost:4000/resetpassword", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        otp: formData.otp,
        password: formData.password,
      }),
    });
    const data = await response.json();
    if (data.success) {
      alert("Password reset successful.");
      setState("Login");
    } else {
      alert(data.errors);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <div className="loginnn">
          <h4>ShopSJ</h4> <img src={loginn} alt="Shop Logo" />
        </div>
        <h1>{state}</h1>

        <div className="loginsignup-fields">
          {(state === "Sign Up" ||
            state === "Login" ||
            state === "Forgot Password") && (
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
          )}
          {(state === "Sign Up" || state === "Login") && (
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
            />
          )}
          {state === "Enter OTP" && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                name="otp"
                value={formData.otp}
                onChange={changeHandler}
              />
              <input
                type="password"
                placeholder="New Password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
              />
            </>
          )}
        </div>

        <button
          onClick={() => {
            state === "Login"
              ? login()
              : state === "Sign Up"
              ? signup()
              : state === "Forgot Password"
              ? requestOtp()
              : resetPassword();
          }}
        >
          Continue
        </button>

        {state === "Login" ? (
          <>
            <p className="loginsignup-login">
              Create an account?{" "}
              <span
                onClick={() => {
                  setState("Sign Up");
                }}
              >
                Click here
              </span>
            </p>
            <p className="loginsignup-login">
              Forgot password?{" "}
              <span
                onClick={() => {
                  setState("Forgot Password");
                }}
              >
                Click here
              </span>
            </p>
          </>
        ) : (
          state === "Sign Up" && (
            <p className="loginsignup-login">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setState("Login");
                }}
              >
                Login here
              </span>
            </p>
          )
        )}

        {state === "Forgot Password" && (
          <p className="loginsignup-login">
            Remembered your password?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
