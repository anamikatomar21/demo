import React from "react";
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card position relative">
        <div className="product-image">
          <img src="/images/images/watch.jpg" alt="product-card" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            kids headphones bulk available in multi pack
          </h5>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            value="3"
            edit={false}
          />
          ,<p className="price">$200.00</p>
        </div>

        <div className="action-bar position-absolute"
      </div>
    </div>
  );
};

export default ProductCard;
