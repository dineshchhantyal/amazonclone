import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket, netPrice }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        value = {netPrice}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value < 0 ? 0 : value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
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
