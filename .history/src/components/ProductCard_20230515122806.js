import React from "react";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card">
        <div className="product-image">
          <img src="/images/images/watch.jpg" alt="product-card" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            kids headphones bulk available in multi pack
          </h5>
          <p className="price">$200.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
