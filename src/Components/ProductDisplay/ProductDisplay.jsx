import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import NewCollections from "../NewCollections/NewCollections";
import "./ProductDisplay.css";
const ProductDisplay = (props) => {
  const { product } = props;
  const [newcollection, setNewCollection] = useState([]);
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState("image");

  const fetchInfo = () => {
    fetch("http://localhost:4000/newcollections")
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };
  const handleImageChange = (direction) => {
    const imageKeys = [
      "image",
      "image2",
      "image3",
      "image4",
      "image5",
      "image6",
    ].filter((image) => product[image]);

    const currentIndex = imageKeys.indexOf(selectedImage);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % imageKeys.length;
    } else if (direction === "prev") {
      newIndex = (currentIndex - 1 + imageKeys.length) % imageKeys.length;
    }

    setSelectedImage(imageKeys[newIndex]);
  };

  return (
    <div>
      <div className="productdisplay">
        {product[selectedImage] && (
          <div className="productdisplay-left">
            <div className="productdisplay-prev-btnhead">
              <button
                className="productdisplay-prev-btn"
                onClick={() => handleImageChange("prev")}
              >
                {"<"}--
              </button>
            </div>
            <div className="productdisplay-img">
              <img
                className="productdisplay-main-img"
                src={product[selectedImage]}
                alt="img"
              />
            </div>
            <div className="productdisplay-prev-btnhead">
              <button
                className="productdisplay-prev-btn"
                onClick={() => handleImageChange("next")}
              >
                --{">"}
              </button>
            </div>
          </div>
        )}

        <div className="productdisplay-right">
          <h1>{product.name}</h1>

          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              Rs.{product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              Rs.{product.new_price}
            </div>
          </div>
          <div className="brandname"> some</div>
          {/* <div className="brandname">brand {product.category}</div> */}

          <div className="productdisplay-right-image-options">
            <h1>Select colours </h1>
            <br />
            <div className="productdisplay-right-image-options">
              {[
                "image",
                "image2",
                "image3",
                "image4",
                "image5",
                "image6",
              ].filter((image) => product[image]).length > 0 ? (
                ["image", "image2", "image3", "image4", "image5", "image6"]
                  .filter((image) => product[image])
                  .map((image) => (
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
                  ))
              ) : (
                <div>No images available</div>
              )}
            </div>
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
                setSelectedSize(null);
              } else {
                alert("Please select a size before adding to cart.");
              }
            }}
          >
            ADD TO CART
          </button>
          <p className="productdisplay-right-category"></p>
          <p className="productdisplay-right-category"></p>
        </div>
      </div>

      <div className="dropdownstyle">
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            color: "#fff",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
            aria-controls="collapse-panel-content"
            id="collapse-panel-header"
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "35px",
                fontWeight: "bold",
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                height: "100%",
                padding: "10px",
              }}
            >
              Product Details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "calc(100% - 40px)",
                height: "100%",
                padding: "10px",
              }}
            >
              description. {product.descriptions}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <hr />
      <div>
        <NewCollections data={newcollection} />
      </div>
    </div>
  );
};

export default ProductDisplay;
