import React from 'react';
import aux from '../../../hoc/aux'; 

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    // convert to array 
    .map(igKey => {
        return ( 
          <li key={giKey}>
              <span style={ {textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
          </li>
        )
  })
    

  return (
      <aux>
          <h3>Your order</h3>
          <p>Your burger contains the following:</p>
          <ul>
           {ingredientSummary}
          </ul>
          <p>Continue to checkout</p>

          </aux>
  )
};


export default orderSummary;
