import React from 'react';
import StarsIcon from '@material-ui/icons/Stars';
import { useStateValue } from './StateProvider';
function Item({outKey ,image, rating, price, title}) {
    const [{basket}, dispatch] = useStateValue();

    const del = () =>{
      console.log("Deleted id",outKey);

        dispatch({
            type : 'REMOVE_FROM_BASKET',
            outKey,
            price,
        }
        );
    }
    return (
    
<div className="item">
        <div className="item__left">
          <img src={image} alt="" />
        </div>
        <div className="item__right">
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
                  <p>
                    <StarsIcon />
                  </p>
                ))} 
            </div>
          </div>
          <div className="remove__btn">
        <button  onClick= {del}>Remove from basket</button>
        </div>
        </div>
      </div>
    )
}

export default Item

