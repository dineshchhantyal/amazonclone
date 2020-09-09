import React from 'react';
import './Product.css';
import StarsIcon from '@material-ui/icons/Stars';


function Product({ title, image, price, rating}) {
  return (
    <div className='product'>
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
        <button>Add to Basket</button>
    </div>
  )
}

export default Product
