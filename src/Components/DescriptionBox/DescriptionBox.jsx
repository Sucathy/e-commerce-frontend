import React, { useState } from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  // const { product } = props;
  const [activeTab, setActiveTab] = useState("ProductDetails");
  const [review, setReview] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [reviewImage, setReviewImage] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  // const [setRating] = useState(0); // Add state for toggling review form

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setReviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitReview = () => {
    if (review.trim() !== "") {
      const newReview = { text: review, image: reviewImage };
      setSubmittedReviews([...submittedReviews, newReview]);
      setReview("");
      setReviewImage(null);
    }
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = [...submittedReviews];
    updatedReviews.splice(index, 1);
    setSubmittedReviews(updatedReviews);
  };

  const handleToggleReviewForm = () => {
    setShowReviewForm(!showReviewForm); // Toggle review form visibility
  };

  // const handleStarClick = (value) => {
  //   setRating(value);
  // };

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div
          className={`descriptionbox-nav-box ${
            activeTab === "ProductDetails" ? "active" : ""
          }`}
          onClick={() => handleTabChange("ProductDetails")}
        >
          Delivery Details
        </div>
        <div
          className={`descriptionbox-nav-box ${
            activeTab === "reviews" ? "active" : ""
          }`}
          onClick={() => handleTabChange("reviews")}
        >
          Customer Reviews
        </div>
        <div
          className={`descriptionbox-nav-box ${
            activeTab === "Exchange" ? "active" : ""
          }`}
          onClick={() => handleTabChange("Exchange")}
        >
          7 Days Returns & Exchange
        </div>
      </div>
      <div className="descriptionbox-description">
        {activeTab === "reviews" && (
          <div>
            <div className="reviews-container">
              <h2 className="reviews-title"> Reviews</h2>
              <div className="reviews-content">
                {/* Display submitted reviews */}
                {submittedReviews.map((submittedReview, index) => (
                  <div key={index} className="review-item">
                    {submittedReview.image && (
                      <img
                        src={submittedReview.image}
                        alt={`Review ${index}`}
                      />
                    )}
                    {/* <p>Rating: {submittedReview.rating}</p> */}
                    <h4>{submittedReview.text}</h4>

                    <button
                      className="delete-review-btn"
                      onClick={() => handleDeleteReview(index)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={handleToggleReviewForm}>
              {showReviewForm ? "Close Review Form" : "Write a Review"}
            </button>
            {showReviewForm && (
              <div>
                {/* <div className="rating-container">
                  <p>Rating: </p>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      className={value <= rating ? "star-filled" : "star-empty"}
                      onClick={() => handleStarClick(value)}
                    >
                      &#9733;
                    </button>
                  ))}
                </div> */}

                <h1> review here</h1>
                <div className="review-input">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <textarea
                    placeholder="Write your review.....!"
                    value={review}
                    onChange={handleReviewChange}
                  />
                </div>

                <button
                  className="submit-review-btn"
                  onClick={handleSubmitReview}
                >
                  Submit Review
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === "ProductDetails" && (
          <div className="container">
            <h1 className="header">Free shipping</h1>
            <div className="">
              {/* <h2 className="">Free Shipping Information</h2> */}
              <div>
                <p className="paragraph">
                  <strong className="strong">Free Shipping:</strong> <br />
                  We offer free shipping across India.
                </p>
                <p className="paragraph">
                  <strong className="strong">1-2 Days Dispatch:</strong> <br />
                  We dispatch orders within 1-2 days.
                </p>
                <p className="paragraph">
                  <strong className="strong">2-5 Days Delivery:</strong> <br />
                  We usually take 2-5 working days depending on your location.
                  Metros usually receive orders within 2-3 days, while the rest
                  of India typically receives orders within 3-5 days.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Exchange" && (
          <div className="container">
            <h1 className="header">Return and Exchange Policy</h1>
            <p className="paragraph">
              Items purchased are eligible for return/exchange if returned
              within 7 days of delivery.
            </p>
            <h2 className="subtitle">Free Exchanges</h2>
            <p className="paragraph">
              We accept exchanges free of cost. This means you won't be charged
              extra to exchange the product(s). It's on us! We want your
              experience to be hassle-free.
            </p>
            <h2 className="subtitle">Easy Returns</h2>
            <p className="paragraph">
              <strong className="strong">For Prepaid Orders:</strong> The full
              amount is refunded into your initial payment mode (bank account,
              credit card, etc.).
            </p>
            <p className="paragraph">
              <strong className="strong">For Cash On Delivery:</strong> A refund
              will be initiated to the bank account that is provided by you at
              the time of raising a return.
            </p>
            <h2 className="subtitle">Exchange For Something Else?</h2>
            <p className="paragraph">
              In case of an exchange, you are also allowed to choose a different
              product. If the value of the replacement product exceeds that of
              the previously purchased product, you can pay just the difference,
              else if it's less, the same can be refunded to you as a gift card.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
