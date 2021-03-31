import React from 'react';

import caret from './images/caret.png';
import minus from './images/minus.png';
import plus from './images/plus.png';

export const ProductPurchase = ({ price }) =>
  <section className="product-purchase">
    <div className="product-purchase__container">
      <div className='product-purchase__quantity'>
        Quantity <img src={minus} alt="Decrease Quantity"/> 1 <img className='product-purchase__arrow' src={plus} alt="Increase Quantity"/>
      </div>
      <div className='product-purchase__otp'>
        One Time Purchase  <img className="product-purchase__otp_arrow" src={caret} alt="Select Frequency"/>
      </div>
    </div>
    <div className='product-purchase__price'>{price}</div>
    <button className='product-purchase__button' name="AddToBag">Add to Bag</button>
  </section>