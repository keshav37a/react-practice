import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    title: 'Laptop',
                    price: 50000,
                    quantity: 1,
                    img: '' 
                },
                {
                    id: 2,
                    title: 'Mobile',
                    price: 10000,
                    quantity: 1,
                    img: '' 
                },
                {
                    id: 3,
                    title: 'Watch',
                    price: 5000,
                    quantity: 1,
                    img: '' 
                }
            ]
        }
    }
    render() {

        const {products} = this.state;

        

        return (
            <div>
                <div>
                    Cart
                </div>
                
                <div className="cart">
                    {products.map((product)=>{
                        return <CartItem product={product} key={product.id}/>
                    })}
                    
                </div>
            </div>
        );

    }
}

export default Cart;
