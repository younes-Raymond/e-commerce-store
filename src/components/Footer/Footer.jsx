import "./Footer.css";
import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/productContext";

const Footer = () => {
  const { showFilter } = useProducts();

  return (
    <footer className={`${showFilter ? "hide-div" : null}`}>
      <div className="about">
        <Link to="/" className="nav-brand">
          BestDeal Buddy
        </Link>

        <div className="text">Discover the best deals on a wide range of products</div>

        <div className="social">
          <a href="https://github.com/younes-Raymond/e-commerce-store" target="_blank">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://twitter.com/younesraymond1" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/younes-raymond-188a40241/" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/younes-Raymond/e-commerce-store" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://github.com/younes-Raymond/e-commerce-store" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://github.com/younes-Raymond/e-commerce-store" target="_blank">
            <i className="fa fa-reddit"></i>
          </a>
          <a href="https://github.com/younes-Raymond/e-commerce-store" target="_blank">
            <i className="fa fa-earth"></i>
          </a>
        </div>
      </div>

      <div className="quick-links">
        <div className="heading">Quick Links</div>
        <div className="sub-heading">
          <Link to="/products">Products</Link>
        </div>
        <div className="sub-heading">
          <Link to="/wishlist">Wishlist</Link>
        </div>
        <div className="sub-heading">
          <Link to="/cart">Cart</Link>
        </div>
      </div>

      <div className="contact">
        <div className="heading">Contact Us</div>

        <div className="sub-heading address">
          <i className="fa fa-map-marker"></i>Rabat , H 12 Temara 
        </div>
        <div className="sub-heading phone">
          <i className="fa fa-phone"></i>+212 694-823014
        </div>
        <div className="sub-heading e-mail">
          <i className="fa fa-envelope"></i>support@amason.com
        </div>
        
      </div>
    </footer>
  );
};

export { Footer };
