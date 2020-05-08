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

    this.db = firebase.firestore();

  }

  componentDidMount(){
    this.db
      .collection('products')
      .onSnapshot((snapshot)=>{
        // console.log(snapshot);
        // snapshot.docs.map((doc)=>{
        //   // console.log(doc.data());
        // })

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
    let id = product.id;
    let docToBeUpdated = this.db
        .collection('products')
        .doc(id);

    docToBeUpdated.update({qty: product.qty+1})
                  .then(()=>{console.log('updated successfully');})
                  .catch((err)=>{console.log('error in updating', err);}
                  );    
  } 

  handleDecreaseQuantity = (product)=>{
    if(product.qty<=1)
        return;
    let id = product.id;
    let docToBeUpdated = this.db
        .collection('products')
        .doc(id);

    docToBeUpdated.update({qty: product.qty-1})
                  .then(()=>{console.log('updated successfully');})
                  .catch((err)=>{console.log('error in updating', err);}
                  );    
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

  addProduct = ()=>{

    this.db
        .collection('products')
        .add({
          title: 'Washing Machine',
          qty: 1,
          price: 15000,
          img: ''
        })
        .then((docRef)=>{
          console.log('successfully added product ', docRef);
        })
        .catch((err)=>{
          console.log('error in adding product ', err);
        })
    
  }

  
  render(){
    const {products, loading} = this.state;
    return(
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <button onClick={this.addProduct} style={{padding: 15, fontSize: 15, margin: 15}}>Add a Product</button>
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
