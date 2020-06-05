import React, { Component } from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {    
    // Could be a functional component
    
    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey =>{
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            )
        });

        return (
            <Auxillary>
                <h3>Your Order</h3>
                <p>A delicious Burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}$</strong></p>
                <p>Continiue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.orderCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.orderContinued}>CONTINUE</Button>
            </Auxillary>
        )
    }
}

export default OrderSummary;