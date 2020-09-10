import React, { useState, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
 


function Subtotal() {
  const [{ basket}, ] = useStateValue();
  useEffect(() => {
    var val = document.getElementById('val');
     val.classList.toggle('transval');


  }, [getBasketTotal(basket)])
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) <p id="val" > <strong>{value < 0 ? 0 : value}</strong> </p>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        value = {getBasketTotal(basket)}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button> Procced to Checkout </button>
    </div>
  );
}

export default Subtotal;
