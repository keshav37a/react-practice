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

    handleIncreaseQty = (product)=>{
        let {products} = this.state;
        const index = products.indexOf(product);
        products[index].quantity +=1;
        this.setState({
            products: products
        });
    }

    handleDecreaseQty = (product)=>{
        let {products} = this.state;
        const index = products.indexOf(product);
        if(product.quantity<=1)
            return;
        products[index].quantity -=1;
        this.setState({
            products: products
        });
    }

    handleDeleteItem = (product)=>{
        let {products} = this.state;
        let index = products.indexOf(product);
        products.splice(index, 1);
        this.setState({
            products: products
        });
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
                        return <CartItem product={product} 
                                handleIncreaseQty={this.handleIncreaseQty} 
                                handleDecreaseQty={this.handleDecreaseQty} 
                                handleDeleteItem = {this.handleDeleteItem}
                                key={product.id}/>
                    })}
                </div>
            </div>
        );
    }
}

export default Cart;
