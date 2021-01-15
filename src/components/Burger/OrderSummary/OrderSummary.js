import React, { Component } from "react"
import Button from "../../UI/Button/Button"

class OrderSummary extends Component {
  //this could be a functional component now...
  // componentDidUpdate() {
  //   console.log('[OrderSummary] will update');
  // }

  render () {

    const ingredientsSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>
        )
    });

    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType="Danger">CANCEL</Button>
        <Button clicked={this.props.purchaseContinued} btnType="Success">Continue</Button>
    </React.Fragment>
    );
  }
}

export default OrderSummary;