import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();
  const [checkOutKey, setCheckOutkey] = useState(id);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        checkOutKey,
        title,
        image,
        price,
        rating,
      },
    });
    setCheckOutkey(checkOutKey * Math.random() * 90000111111);
  };
  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating" style={{ color: "yellow" }}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="jsx-a11y/accessible-emoji">🌟</span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
