import React from 'react';

class CartItem extends React.Component{
    
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}></img>
                </div>
                <div className="right-block">
                    <div style={{fontSize : 25, fontWeight:600}}>Phone</div>
                    <div style={{color:'#777'}}>10000</div>
                    <div style={{color:'#777'}}>Qty:1</div>
                    <div className="cart-item-actions">
                        <img alt="increase-quantity" src="https://image.flaticon.com/icons/svg/1828/1828926.svg" className="action-icons"></img>

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