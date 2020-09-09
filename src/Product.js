import React, { useState } from 'react';
import './Product.css';
import StarsIcon from '@material-ui/icons/Stars';
import { useStateValue } from './StateProvider';


function Product({ id, title, image, price, rating}) {
  const [state, dispatch] = useStateValue();
  const [key, setkey] =useState();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item : {
        id,
        title,
        image,
        price,
        rating,
      },
    });

  }
  return (
    <div className='product' id={id}>
      <div className="product__info">
          <p>{title}</p>
          <p className='product__price'>
              <small>$</small>
              <strong>{ price }</strong>
          </p>
            <div className="product__rating" style={{color : 'yellow'}}>
                {Array(rating).fill().map((_, i)=>
                <p><StarsIcon /></p>
                )}
            </div>
      </div>
      <img src={image} alt=""/>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
