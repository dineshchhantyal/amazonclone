import React from "react";
import "./Items.css";
import { useStateValue } from "./StateProvider";
import Item from "./item";


function Items() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="items">
     {basket.map(item =>(<Item outKey={item.checkOutKey} image={item.image} rating={item.rating} title={item.title} price={item.price}/>))} 
    </div>
  );
}

export default Items;
