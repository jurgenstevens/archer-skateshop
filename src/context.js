import React, { Component } from "react";
// this imports the decks and shoes from the data.js file
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Provider

//Consumer

// 2:30:00 - 2:55:00
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    // first product in the cart
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = id => {
    // create a temporary product array
    let tempProducts = [...this.state.products];
    // this will find the index
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    // this will change the state to the item being in the cart to true
    product.inCart = true;
    // this will add one to the count of this specific product
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = id => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  // this is the increment method for the cart component
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    // this will add one product to the current count
    product.count = product.count + 1;
    // this will multiply the current count of the product by the price
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // this is the decrement method for the cart component
  decrement = id => {
    console.log("This is the decrementation method");
  };

  // remove the item from the cart component
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    // the item that matches this id is not going to be returned to the cart
    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = id => {
    this.setState(
      () => {
        return { cart: [] };
      },
      // this will clear the products from being in the cart even after the
      // page has been cleared
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    // this will loop through the items in the array and add the value from the total from each item
    this.state.cart.map(item => (subTotal += item.total));
    // this will add to the tax
    const tempTax = subTotal * 0.1;
    // this will return the tempTax to a fixed two decimal number
    const tax = parseFloat(tempTax.toFixed(2));
    // this is the final total that adds the subtotal and tax
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  render() {
    return (
      //
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
