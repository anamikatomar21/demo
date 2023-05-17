import React from "react";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card">
        <div className="product-image">
          <img src="/images/images/watch.jpg" alt="product-card" />
        </div>
        <div className="product-details"></div>
        <h6 className="brand">Havels</h6>
        <h5 className="product-title">
          kids headphones bulk avaible in multi pack
        </h5>
        <p className="price"></p>
      </div>
    </div>
  );
};

export default ProductCard;
