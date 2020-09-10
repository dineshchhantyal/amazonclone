import React, {useState} from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
  const [{ basket, user }] = useStateValue();
  const firstname = user?user.email.split('@')[0] : "";

  
  return (
    <div className="checkout" >
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="This is ads"
        />
        
        <div>
          <h4 className="user__info">{user? "Hey! " + firstname : ""  }</h4>
          <h3 className="checkout__title"> { basket.length > 0 ? "Your shopping Basket" : "Add To Basket From Our Shop " }  </h3>
          
          {basket.reverse().map(item => (
            <CheckoutProduct
              outKey = {item.checkOutKey}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;