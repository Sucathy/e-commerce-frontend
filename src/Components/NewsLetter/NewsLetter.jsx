import React from "react";

import "./NewsLetter.css";

const Newsletter = () => {
  // State variables to store subscriber data
  // const [email, setEmail] = useState("");
  // const [subscribers, setSubscribers] = useState([]);
  // const [subCount, setSubCount] = useState(0);

  // Function to handle subscription
  // const handleSubscribe = () => {
  //   // Check if email is not empty
  //   if (email.trim() !== "") {
  //     // Add the email to the subscribers list
  //     setSubscribers([...subscribers, email]);
  //     // Increment the subscriber count
  //     setSubCount(subCount + 1);
  //     // Clear the email input field
  //     setEmail("");
  //     // Optional: You can also save the subscriber data to a database here
  //   } else {
  //     // Optional: You can add validation or error handling here
  //     alert("Please enter a valid email address.");
  //   }
  // };

  return (
    <div className="newsletter">
      <h1>thank you for visiting</h1>
      {/* <p>Subscribe to our newsletter and stay updated.</p>
      <div className="newsletter">
        <input
          className="newsletter"
          type="email"
          placeholder="Your email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
     
      Optional: Display list of subscribers */}
      {/* <div className="">
        <img src={womenshoppingcart_image} alt="hero1" />
      </div> */}
    </div>
  );
};

export default Newsletter;
