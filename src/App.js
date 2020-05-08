import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products:[],
        loading: true
    }
  }

  componentDidMount(){
    firebase
      .firestore()
      .collection('products')
      .get()
      .then((snapshot)=>{
        // console.log(snapshot);
        snapshot.docs.map((doc)=>{
          // console.log(doc.data());
        })

        const products = snapshot.docs.map((doc)=>{
          console.log(doc.data());
          let pr = doc.data();
          pr['id'] = doc.id;
          return pr;
        })

        console.log(products);

        this.setState({
          products,
          loading: false
        });
      });


  } 

  handleIncreaseQuantity = (product)=>{
    let {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty +=1;
    this.setState({
        products: products
    });
  } 

  handleDecreaseQuantity = (product)=>{
    let {products} = this.state;
    const index = products.indexOf(product);
    if(product.qty<=1)
        return;
    products[index].qty -=1;

    // this.getCartCount();

    this.setState({
        products
    });
  }

  handleDeleteProduct = (product)=>{
    let {products} = this.state;
    let index = products.indexOf(product);
    products.splice(index, 1);

    // this.getCartCount();

    this.setState({
        products
    });
  }

  getCartCount = ()=> {
    const {products} = this.state;
    let count = 0;
    products.forEach((product)=>{
      count+=(Number)(product.qty);
    })
    return count;
  }

  getTotalAmount = ()=>{
    const {products} = this.state;
    let totalAmount = 0;
    products.forEach((product)=>{
      totalAmount+=product.qty*product.price;
    })
    return totalAmount;
  }

  
  render(){
    const {products, loading} = this.state;
    return(
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        {loading && <h1>Loading...</h1>}
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
