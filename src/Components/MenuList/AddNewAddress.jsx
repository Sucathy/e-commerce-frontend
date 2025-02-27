import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Account.css";

const AddNewAddress = () => {
  const [formData, setFormData] = useState({
    username: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    flatHouse: "",
    fullAddress: "",
    pinCode: "",
    state: "",
    city: "",
  });
  const [message, setMessage] = useState({
    type: "",
    text: "",
  });
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetchAccountDetails();
  }, []);

  const fetchAccountDetails = async () => {
    try {
      const response = await fetch("http://localhost:4000/addressdetails", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token") || "",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch address details");
      }

      const data = await response.json();
      setAddresses(data);
    } catch (error) {
      console.error("Error fetching address details:", error.message);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token") || "",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add address");
      }

      const data = await response.json();
      console.log("Address added successfully:", data);
      showMessage("success", "Address saved successfully");
      setAddresses(data.addresses);
    } catch (error) {
      console.error("Error in handleSubmit:", error.message);
      showMessage("error", "Failed to add address");
    }

    setFormData({
      username: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "Selecthere",
      flatHouse: "",
      fullAddress: "",
      pinCode: "",
      state: "",
      city: "",
    });
  };

  const showMessage = (type, text) => {
    setMessage({
      type,
      text,
    });
  };

  const handleDelete = async (addressId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/address/${addressId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token") || "",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete address");
      }

      const data = await response.json();
      console.log("Address deleted successfully:", data);
      showMessage("success", "Address deleted successfully");
      setAddresses(data.user.addresses); // Update addresses state after deletion
    } catch (error) {
      console.error("Error deleting address:", error.message);
      showMessage("error", "Failed to delete address");
    }
  };

  return (
    <div className="address-page">
      <div className="popup-message">
        {message.type && <div className={message.type}>{message.text}</div>}
      </div>
      <div className="address_details">
        <form onSubmit={handleSubmit}>
          <h2>Address Details</h2>
          <label>First Name:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={changeHandler}
          />
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
          <br />
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={changeHandler}
          />
          <br />
          <label>Flat/House:</label>
          <input
            type="text"
            name="flatHouse"
            value={formData.flatHouse}
            onChange={changeHandler}
          />
          <br />
          <label>Full Address:</label>
          <input
            type="text"
            name="fullAddress"
            value={formData.fullAddress}
            onChange={changeHandler}
          />
          <br />
          <label>Pin Code:</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={changeHandler}
          />
          <br />
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={changeHandler}
          />
          <br />
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={changeHandler}
          />
          <br />

          <button className=" button-btn" type="submit">
            add new address
          </button>
          <Link to="/address">
            <button className=" button-btn" type="submit">
              update
            </button>
          </Link>
        </form>
        <div>
          <h2>Saved Addresses</h2>
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

              <button
                className=" button-btn"
                onClick={() => handleDelete(address._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddNewAddress;
