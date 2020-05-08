import React from 'react';

const CartItem = (props)=>
{
    const {title, price, qty, img} = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;

    return (
        <div className="cart-item">
            <div className="left-block">
                <img alt="item-img" style={styles.image} src={product.img}></img>
            </div>
            <div className="right-block">

                <div style={{fontSize : 25, fontWeight:600}}> {title} </div>
                <div style={{color:'#777'}}>{price}</div>
                <div style={{color:'#777'}}>Quantity:{qty}</div>

                <div className="cart-item-actions">

                    <img alt="increase-quantity" 
                            src="https://image.flaticon.com/icons/svg/1828/1828926.svg" 
                            className="action-icons" 
                            onClick={()=>{onIncreaseQuantity(product)}} >
                    </img>

                    <img alt="decrease-quantity" 
                            src="https://image.flaticon.com/icons/svg/1828/1828906.svg" 
                            className="action-icons" 
                            onClick={()=>{onDecreaseQuantity(product)}} >
                    </img>

                    <img alt="remove-item" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                            className="action-icons" 
                            onClick = {()=>{onDeleteProduct(product)}}>
                    </img>

                </div>
            </div>
        </div>
    );
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