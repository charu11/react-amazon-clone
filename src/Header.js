import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketItem from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">Hello</span>
          <span className="heder__optionTwo">Signin</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Returns</span>
          <span className="heder__optionTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="heder__optionTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketItem />
          <span className="header__optionTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
