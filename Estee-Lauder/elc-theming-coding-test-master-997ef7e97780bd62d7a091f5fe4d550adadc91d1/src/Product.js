import React from 'react';
import { MobileCategory } from './MobileCategory';
import { ProductDesc } from './ProductDesc';
import { ProductImage } from './ProductImage';
import { ProductPurchase } from './ProductPurchase';

import './styles/product.scss';

export const Product = ({ productData: { imgURL, category, name, description, ratingURL, features, shade, price } }) =>
  <main className="product">
    <div className="product-imgContainer">
      <MobileCategory category={category}></MobileCategory>
      <ProductImage image={imgURL} />
    </div>
    <div className="product-descrContainer">
      <ProductDesc 
        category={category}
        name={name}
        description={description}
        rating={ratingURL} 
        features={features} 
        shade={shade} />
      <hr className="product-hr"/>
      <ProductPurchase price={price} />
    </div>
 </main>
