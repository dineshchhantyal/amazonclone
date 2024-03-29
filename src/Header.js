import "./Header.css";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { IconButton, Input, InputLabel } from "@material-ui/core";


function Header() {
  const [{ basket, user }] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to='/'> <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        className="header__logo"
        alt= ""
      /> </Link>
     
      <div className="header__search">
        <Input type="text" className="header__searchInput" placeholder="Search"/>

        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
      <Link to={!user && '/login'}>
        <div onClick={handleAuthenticaton} className="header__option">
          <span className="header__optionLineOne"> {user? "Hey," + user.email : ""}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Order</span>
          <span className="header__optionLineTwo">&option </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to='/checkout'> 
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
