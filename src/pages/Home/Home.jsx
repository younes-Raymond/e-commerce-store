import "./Home.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { HorizontalCard } from "../../components/HorizontalCard/HorizontalCard";
import { categories } from "../../backend/db/categories";
import { useProducts } from "../../contexts/productContext";

const Home = () => {
  const { productState, productDispatch, filterTypes } = useProducts();
  const { CATEGORY, CLEAR_FILTERS } = filterTypes;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/assets/SlideShowImg/1.png",
    "/assets/SlideShowImg/2.png",
    "/assets/SlideShowImg/3.png",
    "/assets/SlideShowImg/4.png",
    "/assets/SlideShowImg/5.png",
    "/assets/SlideShowImg/6.png",
    "/assets/SlideShowImg/7.png",
    "/assets/SlideShowImg/8.png",
    //add more images
  ];
  const slideInterval = 2500;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, [slides.length, slideInterval]);

  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="main-section">
        <div className="hero">
          <div className="hero-img">
          <img className="resp-img" src={slides[currentSlide]} alt="Slide" />
          </div>

          <div className="hero-content">
  <div>
    Find the Best Products at the Best Prices
    <p className="sub-title">
      Discover our curated selection of top-quality products at unbeatable prices
    </p>
    <Link to="/products" className="hero-action">
      <button className="btn btn-primary">Explore Deals</button>
    </Link>
  </div>
</div>

        </div>

        <div className="services-category">
          <div className="service">
            <div className="icon">
              <i className="fa-solid fa-check-circle"></i>
            </div>

            <div className="text">
              <div className="heading">Money Guarantee</div>
              <div className="sub-heading">7 Days Money Back</div>
            </div>
          </div>

          <div className="service">
            <div className="icon">
              <i className="fa-solid fa-truck-fast"></i>
            </div>

            <div className="text">
              <div className="heading">Fast Delivery</div>
              <div className="sub-heading">Within 3-5 business days</div>
            </div>
          </div>

          <div className="service">
            <div className="icon">
              <i className="fa fa-credit-card"></i>
            </div>

            <div className="text">
              <div className="heading">Secure Payments</div>
              <div className="sub-heading">All Cards Accepted</div>
            </div>
          </div>
        </div>

        <div className="main-category">
          <div className="heading-2">Categories:</div>

          <div className="grid grid-three-col category-grid">
            {categories.map((category) => {
              return (
                <Link to="/products" key={category._id}>
                  <div
                    className="category-container"
                    onClick={() => {
                      productDispatch({
                        type: CLEAR_FILTERS,
                        payload: { data: productState.products },
                      });
                      productDispatch({
                        type: CATEGORY,
                        payload: { value: category.categoryName },
                      });
                    }}
                  >
                    <img
                      className="resp-img"
                      src={category.image}
                      alt={category.categoryName}
                    />
                    <div className="overlay-container">
                      {category.categoryName.toUpperCase()}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="featured-category">
          <div className="heading-2">Featured:</div>

          <div className="grid grid-two-col featured-grid">
            {productState.products.slice(0, 4).map((product) => (
              <HorizontalCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { Home };
