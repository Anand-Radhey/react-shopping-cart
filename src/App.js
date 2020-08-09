import React from 'react';
import data from "./data.json";



//function App() {
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  render() {
  return (
    <div className="grid-container">
      <header>
        <a href="/">DigiSwaraj React Shopping Cart</a>  
      </header>
      <main>
        <div className="content">
          <div className="main">
            products
          </div>
          <div className="sidebar">
            Cart Items
          </div>
        </div>
      </main>   
      <footer>
        All Rights Reserved with DigiSwaraj
      </footer>
    </div>
  );
  }
}

export default App;
