import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handlerAddToCart = (products) => {
    // cart.push(products)
    const newCart = [...cart, products];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div>
        <h3>This is for product : {products.length}</h3>
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              products={product}
              handler={handlerAddToCart}
            ></Product>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <h3>Order summary</h3>
        <p>selected item: {cart.length}</p>
        <p>
          Total Price: {cart.reduce((pre, current) => pre + current.price, 0)}
        </p>
      </div>
    </div>
  );
};

export default Shop;
