import "./Header.css";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        src="https://www.pinclipart.com/picdir/middle/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png"
        className="header__logo"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Sir</span>
          <span className="header__optionLineTwo">Hello Sir</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Order</span>
          <span className="header__optionLineTwo">&option </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
