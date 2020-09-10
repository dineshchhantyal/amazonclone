import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ outKey, id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const del = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      outKey,
    });
  };

  return (
    <div className="checkoutProduct" key={outKey}>
      <img className="checkoutProduct__image" src={image} />

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
                <p>🌟</p>
              ))}
          </div>
        </div>
        <div className="checkout__cancel">
          <button onClick={del}>Remove from Basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
