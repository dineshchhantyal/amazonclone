import React, { useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ outKey, id, image, title, price, rating }) {
  const [, dispatch] = useStateValue();
  const [odd, setOdd] = useState('0');
  
  const del = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      outKey,
    });
  };

  return (
    <div className="checkoutProduct" key={outKey} data-aos="fade-up" data-aos-delay="0s" data-aos-anchor-placement="top-bottom">
      <img className="checkoutProduct__image" src={image} alt={title[6]}/>

      <div className="checkoutProduct__info">
        <div className="chekout__detail">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span role="img" aria-label="jsx-a11y/accessible-emoji">🌟</span>
              ))}
          </div>
        </div>
        <div className="checkout__cancel">
          <button onClick={del} className="Remover">Remove from Basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
