import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ handler, products }) => {
  // const { handler, products } = props;
  const { name, price, ratings, img, seller } = products;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p>Price: ${price}</p>
        <div>
          <p>
            <small>Manufecturer: {seller}</small>
          </p>
          <p>Ratings: {ratings} star</p>
        </div>
      </div>
      <button onClick={() => handler(products)} className="add-to-cart-btn">
        <span className="cart-text">Add to Cart</span>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
