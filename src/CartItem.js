import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Roasted Chicken',
            price: 500,
            quantity: 1,
            img: ''
        }
    }

    increaseQty = ()=>{
        console.log('this', this.state.quantity);
    }

    render(){
        const {title, price, quantity, img} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="item-img" style={styles.image}></img>
                </div>
                <div className="right-block">

                    <div style={{fontSize : 25, fontWeight:600}}> {title} </div>
                    <div style={{color:'#777'}}>{price}</div>
                    <div style={{color:'#777'}}>Qty:{quantity} kg</div>

                    <div className="cart-item-actions">

                        <img alt="increase-quantity" src="https://image.flaticon.com/icons/svg/1828/1828926.svg" className="action-icons" onClick={this.increaseQty}></img>

                        <img alt="decrease-quantity" src="https://image.flaticon.com/icons/svg/1828/1828906.svg" className="action-icons"></img>

                        <img alt="remove-item" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" className="action-icons"></img>

                    </div>
                </div>
            </div>

        );
    }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4
    // background: '#777'
  }
}

export default CartItem;