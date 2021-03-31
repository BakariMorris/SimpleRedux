import React from 'react';

import caret from './images/caret.png';

export const ProductDesc = ({ category, name, description, rating, features, shade }) =>
  <section>
    <h4 className='product-category'>{category}</h4>
    <h2 className='product-description__name'>{name}</h2>
    <p className='product-description__subtitle'>{description}</p>
    <figure className='product-rating'>
      <img className='product-rating__stars' src={rating} alt="Product Rating" />
      <img className='product-rating__arrow' src={caret} alt="View All Ratings" />
    </figure>
    <section className='product-details'>
      <div className="product-details__row-2">
        <div>
          <h4>Benefits</h4>
          <p>{features.benefits}</p>
        </div>
        <div>
          <h4>Finish</h4>
          <p>{features.finish}</p> 
        </div>
      </div>
      <div className="product-details__row-2">
        <div>
          <h4>Coverage</h4>
          <p>{features.coverage}</p>
        </div>
        <div>
          <h4>Key Ingredients</h4>
          <p>{features.keyIngredients} <a href="http://www.clinique.com">More</a></p>
        </div>
      </div>
    </section>
    <section className='product-color-selector'>
      <span>{shade.name}</span>
      <div  className='product-color-selector__color' style={{ background: shade.color }}></div>
    </section>
  </section>
