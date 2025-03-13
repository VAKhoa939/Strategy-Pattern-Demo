import amazonLogo from "/images/amazon-logo-white.png";
import amazonMobileLogo from "/images/amazon-mobile-logo-white.png";
import searchIcon from "/images/icons/search-icon.png";
import cartIcon from "/images/icons/cart-icon.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="amazon-header">
      <div className="amazon-header-left-section">
        <a href="#" className="header-link">
          <img className="amazon-logo" src={amazonLogo} />
          <img className="amazon-mobile-logo" src={amazonMobileLogo} />
        </a>
      </div>

      <div className="amazon-header-middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src={searchIcon} />
        </button>
      </div>

      <div className="amazon-header-right-section">
        <a className="orders-link header-link" href="#">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </a>

        <a className="cart-link header-link" href="#">
          <img className="cart-icon" src={cartIcon} />
          <div className="js-cart-quantity cart-quantity">0</div>
          <div className="cart-text">Cart</div>
        </a>
      </div>
    </div>
  );
};

export default Header;
