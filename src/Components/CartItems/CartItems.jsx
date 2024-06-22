import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import cross_icon from "../Assets/cart_cross_icon.png";
import "./CartItems.css";
const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount, addToCart } =
    useContext(ShopContext);

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [invalidPromo, setInvalidPromo] = useState(false);

  const totalCartAmount = getTotalCartAmount();

  const increaseQuantity = (productId) => {
    addToCart(productId);
  };

  const decreaseQuantity = (productId) => {
    if (cartItems[productId] > 1) {
      removeFromCart(productId);
    }
  };

  const handleApplyPromo = () => {
    // Check if promo code is valid
    const validPromoCodes = ["SURESH", "SUCATHY", "PROMO789"]; // Example list of valid promo codes
    if (validPromoCodes.includes(promoCode.trim().toUpperCase())) {
      setPromoApplied(true);
      setInvalidPromo(false);
      // Clear the promo code input after applying
      setPromoCode("Suresh");
      // Close the success message after 3 seconds
      setTimeout(() => {
        setPromoApplied(false);
      }, 3000);
    } else {
      // Promo code is invalid
      setInvalidPromo(true);
      // Close the error message after 3 seconds
      setTimeout(() => {
        setInvalidPromo(false);
      }, 3000);
    }
  };

  // Check if the cart is empty
  if (!products || products.length === 0) {
    return <div className="cartitems">Your cart is empty</div>;
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format-main cartitems-format">
                <img className="cartitems-product-icon" src={e.image} alt="" />
                <p cartitems-product-title>{e.name}</p>
                <p>Rs.{e.new_price}</p>
                <div className="cartitems-quantity">
                  <button onClick={() => decreaseQuantity(e.id)}>-</button>
                  <p>{cartItems[e.id]}</p>
                  <button onClick={() => increaseQuantity(e.id)}>+</button>
                </div>
                <p>Rs.{e.new_price * cartItems[e.id]}</p>
                <img
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="cartitems-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1> Order Summary</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>Rs.{totalCartAmount}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>Rs.{totalCartAmount}</h3>
            </div>
          </div>
          <Link to="/checkoutList" style={{ textDecoration: "none" }}>
            <button>PROCEED TO CHECKOUT</button>
          </Link>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cartitems-promocode">
          <p> Enter code</p>
          <input
            className="promo-input"
            placeholder="promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button onClick={handleApplyPromo}>Submit</button>

          {promoApplied ? (
            <p className="promo-success-msg">Promcode applied success..!</p>
          ) : null}
          {invalidPromo ? (
            <p className="promo-error-msg">Invalid promo code.</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
