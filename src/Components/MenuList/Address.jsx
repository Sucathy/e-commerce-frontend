import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Account.css";
import MenuLists from "./MenuLists";
const Address = () => {
  const initialFormData = {
    username: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    flatHouse: "",
    fullAddress: "",
    pinCode: "",
    state: "",
    city: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [addresses, setAddresses] = useState([]);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    fetchAccountDetails();
  }, []);

  const fetchAccountDetails = async () => {
    try {
      const response = await fetch("http://localhost:4000/accountdetails", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token") || "",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch account details");
      }

      const data = await response.json();
      setAddresses(data.addresses);
      setFormData({
        username: data.username,
        lastName: data.lastName,
        email: data.email || "",
        phoneNumber: data.phoneNumber,
        flatHouse: data.flatHouse,
        fullAddress: data.fullAddress,
        pinCode: data.pinCode,
        state: data.state,
        city: data.city,
      });
    } catch (error) {
      console.error("Error fetching account details:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    setAddresses([...addresses, formData]);
    showMessage("success", "Address added successfully");
    setFormData(initialFormData); // Clear form data after adding address
  };

  const showMessage = (type, text) => {
    setMessage({ type: type, text: text });
    setTimeout(() => {
      setMessage({ type: "", text: "" });
    }, 3000);
  };

  return (
    <div className="address-page">
      <MenuLists />
      <div className="address_details">
        <form onSubmit={handleAddAddress} className="saved-addresses">
          {/* <h1>Address Details</h1>
          <hr />
          <h3>
            Name: {formData.username} {formData.lastName}
          </h3>
          <h3>{formData.fullAddress}</h3>
          <h3>
            {formData.pinCode} {formData.state}
          </h3>
          <h3>{formData.city}</h3>
          <h3>Mobile Number: {formData.phoneNumber}</h3> */}

          <h1> Addresses details</h1>
          {addresses.map((address, index) => (
            <div key={index} className="addressesss">
              <p>
                <strong>
                  {address.username} {address.lastName}
                </strong>
              </p>
              <p>{address.fullAddress}</p>
              <p>
                {address.city}, {address.state} - {address.pinCode}
              </p>
              <p>Phone: {address.phoneNumber}</p>
              <hr />
            </div>
          ))}

          <Link to="/newaddaddress">
            <button
              className=" button-btn"
              type="submit"
              onChange={handleChange}
            >
              Add and Edit Address
            </button>
          </Link>
          {message.text && (
            <p className={`message ${message.type}`}>{message.text}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Address;
