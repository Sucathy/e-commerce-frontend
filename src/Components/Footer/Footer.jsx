import { useState } from "react";
import "./Footer.css";

import linkedin_icon from "../Assets/pngwing.com.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("description");

  // Function to toggle active dropdown

  const handleTabChange = (tab) => {
    // setActiveTab(tab);
    setActiveTab((prevTab) => (prevTab === tab ? null : tab));
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        {/* <img src={footer_logo} alt="" /> */}
        <p>Sucathy</p>
      </div>

      <ul className="footer-links">
        <li>
          <div
            className={`descriptionbox-nav-box ${
              activeTab === "ProductDetails" ? "active" : ""
            }`}
            onClick={() => handleTabChange("ProductDetails")}
          >
            Product
          </div>
        </li>
        <li>
          <div
            className={`descriptionbox-nav-box ${
              activeTab === "company" ? "active" : ""
            }`}
            onClick={() => handleTabChange("company")}
          >
            company
          </div>
        </li>

        <li>
          <div>
            <ul className="product-details-list">
              <p>
                Phone: 6363203639
                <br />
                Email: susuresh158@gmail.com <br />
                Customer Service Hour @24 Hours
                <br />
                Address: BTM water tank bengaluru - 560089
                <br />
              </p>
            </ul>
          </div>
        </li>

        <li>
          {activeTab === "ProductDetails" && (
            <div>
              <ul className="product-details-list">
                <li>
                  <span className="value">
                    <h2>Product</h2>
                    Premium quality Full sleeves Plain Shirt direct from the
                    manufacturer with very affordable Price which gives you
                    perfect fit, comfort feeling with handsome look.Our product
                    is made with such design which is wearable at All the
                    Occations Like Formal Wear, Office wear, Weekend even Some
                    of light colo$at Beach also Wear it with some slacks to the
                    office and throw on some jeans at night for drinks with the
                    guys. The style you want and the feel you need all rolled
                    into this shirt.
                  </span>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          {activeTab === "company" && (
            <div>
              <ul className="product-details-list">
                <h2>Company</h2>
                <p>
                  Welcome to our company! We're dedicated to providing the best
                  online shopping experience for our custome
                  <br /> Our mission is to offer a wide range of premium
                  products and unbeatable deals, ensuring convenience and value
                  for all shoppe$ At our company, we prioritize customer
                  satisfaction and strive to exceed expectations with every
                  interaction. From our seamless navigation and secure
                  transactions to our prompt deliveries, we're committed to
                  delivering excellence at every step. Trusted by millions
                  worldwide, we've established ou$lves as a leading force in the
                  e-commerce industry. Whether you're looking for everyday
                  essentials or luxury indulgences, we have something for
                  everyone. Join us today and discover why we're the preferred
                  choice for savvy shoppe$everywhere.
                </p>
              </ul>
            </div>
          )}
        </li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin_icon} alt="LinkedIn Icon" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a
            href="https://chat.whatsapp.com/CTPBqumwCYVLxDJjuprTNk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp_icon} alt="WhatsApp Icon" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
