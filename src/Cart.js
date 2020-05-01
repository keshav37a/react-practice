import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    render() {
        return (
            <div>
                <div>
                    Cart
                </div>
                <div className="cart">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>
        );

    }
}

export default Cart;
