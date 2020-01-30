import React from "react";
import "./Header/../Header.css";
import udemy from "./udemy-img.png";
import menu from "./menu icon.png";
import newsearch from "./newsearch.png";
import cart from "./cart.png";
const Header = () => {
  return (
    <div>
      <header>
        <img
          src={udemy}
          alt="udemy"
          // className="udim"
          style={{ width: "auto", height: "20px" }}
        />
        <div className="left">
          <img
            src={menu}
            alt="category"
            className="menu"
            height="20px"
            width="auto"
          />
          <span>category</span>
        </div>
        <div id="input">
          <input
            type="search"
            name="search"
            id="s"
            placeholder="search for any thing"
          />
          <div className="searDiv">
            <img
              src={newsearch}
              alt="search-img"
              className="sear"
              height="15px"
              width="auto"
            />
          </div>
        </div>
        <div className="hov">
          <a href="/" className="b">
            udemy for business
          </a>
          <div className="drop-down">
            <p>
              get your team access to 3500 plus top <br />
              udemy any time any where
            </p>
            <a href="/">try udemy for business</a>
          </div>
        </div>
        <div className="hov2">
          <a href="/" className="c">
            teach in udemy
          </a>
          <div className="drop-down2">
            <p>
              turn what you know into an opportunity <br />
              and reach millions around the world
            </p>
            <a href="/">learn more</a>
          </div>
        </div>
        <div className="right">
          <div className="img">
            <img
              src={cart}
              alt="cart-img"
              height="30px"
              width="auto"
              className="im"
            />
            <div className="drop-down3">
              <p>your cart is empty</p>
              <a href="/" className="e">
                keep shopping
              </a>
            </div>
          </div>
          <div className="reg">
            <a href="/" className="sigin">
              log in
            </a>
            <a href="/" className="sigup">
              sign up
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
