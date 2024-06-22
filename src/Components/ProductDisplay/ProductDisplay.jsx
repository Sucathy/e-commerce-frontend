import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./ProductDisplay.css";
const ProductDisplay = (props) => {
  // const { product } = props;
  // , category, tags
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState("image2");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };
  const handleImageChange = (direction) => {
    const images = ["image2", "image3", "image4", "image5", "image6"];
    // product.image,
    // product.image2,
    // product.image3,
    // product.image4,
    // product.image5,
    // product.image6,
    // ];
    const currentIndex = images.indexOf(selectedImage);
    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(images[newIndex]);
  };
  // Function to toggle active dropdown
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        {/* <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div> */}
        <button
          className="productdisplay-prev-btn"
          onClick={() => handleImageChange("prev")}
        >
          {"<"}--
        </button>
        {/* <button className="productdisplay-prev-btn">--</button> */}
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product[selectedImage]}
            alt="img"
          />
        </div>
        <button
          className="productdisplay-prev-btn"
          onClick={() => handleImageChange("next")}
        >
          --{">"}
        </button>
        {/* <button className="productdisplay-prev-btn">Next</button> */}
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        {/* <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(4)</p>
        </div> */}
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            Rs.{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            Rs.{product.new_price}
          </div>
        </div>
        <div className="description">description. {product.descriptions}</div>
        {/* <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div> */}

        <div className="productdisplay-right-image-options">
          <h1>Select colours </h1>
          <div className="productdisplay-right-image-options">
            {["image2", "image3", "image4", "image5", "image6"].map((image) => (
              <div
                key={image}
                className={`image-option ${
                  selectedImage === image ? "selected" : ""
                }`}
                onClick={() => handleImageSelect(image)}
              >
                <img
                  className="productdisplay-main-img"
                  src={product[image]}
                  alt="img"
                />
              </div>
            ))}
          </div>
          {/* <div className="productdisplay-img">
            <img
              className="productdisplay-main-img"
              src={product[selectedImage]}
              alt="img"
            />
          </div> */}
          {/* <div className="productdisplay-right-image-options">
            <div
              className={`image-option ${
                selectedImage === "image1" ? "selected" : ""
              }`}
              onClick={() => handleImageSelect("image1")}
            >
              <img src={product.image} alt="img" />
            </div>
            <div
              className={`image-option ${
                selectedImage === "image2" ? "selected" : ""
              }`}
              onClick={() => handleImageSelect("image2")}
            >
              <img src={product.image2} alt="img" />
            </div>

            <div
              className={`image-option ${
                selectedImage === "image3" ? "selected" : ""
              }`}
              onClick={() => handleImageSelect("image3")}
            >
              <img src={product.image3} alt="img" />
            </div>
            <div
              className={`image-option ${
                selectedImage === "image4" ? "selected" : ""
              }`}
              onClick={() => handleImageSelect("image4")}
            >
              <img src={product.image4} alt="img" />
            </div>
            <div
              className={`image-option ${
                selectedImage === "image5" ? "selected" : ""
              }`}
              onClick={() => handleImageSelect("image5")}
            >
              <img src={product.image5} alt="img" />
            </div>
            <div
              className={`image-option ${
                selectedImage === "image6" ? "selected" : ""
              }`}
              onClick={() => handleImageSelect("image6")}
            >
              <img src={product.image6} alt="img" />
            </div>
          </div> */}
        </div>

        <div className="productdisplay-right-size">
          <h2 className="size-chart">Select Size</h2>
          <div className="productdisplay-right-sizes">
            <div
              className={`size ${selectedSize === "S" ? "selected" : ""}`}
              onClick={() => handleSizeSelect("S")}
            >
              S
            </div>
            <div
              className={`size ${selectedSize === "M" ? "selected" : ""}`}
              onClick={() => handleSizeSelect("M")}
            >
              M
            </div>
            <div
              className={`size ${selectedSize === "L" ? "selected" : ""}`}
              onClick={() => handleSizeSelect("L")}
            >
              L
            </div>
            <div
              className={`size ${selectedSize === "XL" ? "selected" : ""}`}
              onClick={() => handleSizeSelect("XL")}
            >
              XL
            </div>
            <div
              className={`size ${selectedSize === "XXL" ? "selected" : ""}`}
              onClick={() => handleSizeSelect("XXL")}
            >
              XXL
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            if (selectedSize) {
              addToCart(product.id);
              setSelectedSize(null); // Reset selected size after adding to cart
            } else {
              alert("Please select a size before adding to cart.");
            }
          }}
        >
          ADD TO CART
        </button>
        <Link
          className="buy-now"
          to="/checkoutList"
          style={{ textDecoration: "none" }}
        >
          <button>BUY NOW</button>
        </Link>

        <p className="productdisplay-right-category">
          {/* <span>Category :</span> {category} */}
        </p>
        <p className="productdisplay-right-category">
          {/* <span>Tags :</span> {tags} */}
        </p>
        <div className="product-details">
          <ul className="product-details-links">
            <li
              className={`dropdown-toggle ${
                activeDropdown === 1 ? "active" : ""
              }`}
            >
              <hr />
              <h1 onClick={() => toggleDropdown(1)}>
                Product Details {activeDropdown === 1 ? "-" : "+"}
              </h1>
              <div>description. {product.descriptions}</div>
              <div
                className={`dropdown-content ${
                  activeDropdown === 1 ? "active" : ""
                }`}
              >
                <hr />
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
