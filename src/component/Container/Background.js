import React from "react";
import newsearch from "../Header/newsearch.png";
import "./Background.css";

const Background = () => {
  return (
    <div className="udy">
      <div className="text">
        <h2>Learn on your schedule</h2>
        <p>
          Study any topic anytime.Choose from thousands of <br />
          expert led courses now.
        </p>
        <input
          type="search"
          name="search"
          id="sea"
          className="sea"
          placeholder="what do you want to learn? "
        />
        <div class="body-sear">
          <img src={newsearch} alt={newsearch} />
        </div>
      </div>
    </div>
  );
};
export default Background;
