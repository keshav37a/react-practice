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
                    <div className="action-icons"></

                    div>
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