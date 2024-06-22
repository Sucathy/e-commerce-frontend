import React, { useState } from "react";
import "./CheckoutList.css";

const CheckoutList = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    state: "",
    locality: "",
    pincode: "",
    address: "",
    city: "",
    alternateNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission logic here
    // Reset form after submission if needed
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      state: "",
      locality: "",
      pincode: "",
      address: "",
      city: "",
      alternateNumber: "",
    });
  };

  return (
    <div className="form1">
      <h1 className="checkout-div ">Checkout </h1>
      {/* Delivery Address Section */}
      <div className="form-checkoutlist">
        <h2 className="login">Delivery Address</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          <label htmlFor="locality">Locality:</label>
          <input
            type="text"
            id="locality"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
          />
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <label htmlFor="alternateNumber">Alternate Number:</label>
          <input
            type="text"
            id="alternateNumber"
            name="alternateNumber"
            value={formData.alternateNumber}
            onChange={handleChange}
          />
          <button type="submit">Save Address</button>
        </form>
      </div>
      {/* Proceed to Payment Section */}
      <div>
        <h2 className="login">Proceed to Payment</h2>
        <button type="submit">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default CheckoutList;
