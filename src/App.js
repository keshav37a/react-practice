import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products: [
            {
                id: 1,
                title: 'Laptop',
                price: 50000,
                quantity: 1,
                img: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/9/V/9VX05PA-1_T1582789333.png' 
            },
            {
                id: 2,
                title: 'Mobile',
                price: 10000,
                quantity: 1,
                img: 'https://www.thechennaimobiles.com/image/cache/catalog/136708-v5-oppo-reno-3-pro-mobile-phone-hres-1-600x600.jpg' 
            },
            {
                id: 3,
                title: 'Watch',
                price: 5000,
                quantity: 1,
                img: 'https://images-na.ssl-images-amazon.com/images/I/71vKyimxsiL._UX342_.jpg' 
            }
        ]
    }
  }

  handleIncreaseQuantity = (product)=>{
    let {products} = this.state;
    const index = products.indexOf(product);
    products[index].quantity +=1;
    this.setState({
        products: products
    });
  } 

  handleDecreaseQuantity = (product)=>{
    let {products} = this.state;
    const index = products.indexOf(product);
    if(product.quantity<=1)
        return;
    products[index].quantity -=1;

    // this.getCartCount();

    this.setState({
        products: products
    });
  }

  handleDeleteProduct = (product)=>{
    let {products} = this.state;
    let index = products.indexOf(product);
    products.splice(index, 1);

    // this.getCartCount();

    this.setState({
        products: products
    });
  }

  getCartCount = ()=> {
    const {products} = this.state;
    let count = 0;
    products.forEach((product)=>{
      count+=product.quantity;
    })
    return count;
  }

  getTotalAmount = ()=>{
    const {products} = this.state;
    let totalAmount = 0;
    products.forEach((product)=>{
      totalAmount+=product.quantity*product.price;
    })
    return totalAmount;
  }

  
  render(){
    const {products} = this.state;
    return(
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products = {products}
          totalAmount={this.getTotalAmount()}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={styles.total}>
            Total: {this.getTotalAmount()}
        </div>
    </div>
    );
  }

}

const styles = {
  total:{
    fontSize: 20,
    padding: 20
  }
}

export default App;
