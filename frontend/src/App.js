import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
  return (
    <BrowserRouter>
    <div classname="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="index.html">amazona</a>
      </div>
      <div>
        <a href="/cart">cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
    <main>
    <Route path="/product/:id" component={ProductScreen}></Route>
    <Route path="/" component={HomeScreen} exact></Route>
    </main>
    <footer className="row center">
      all rights reserved
    </footer>
  </div>
  </BrowserRouter>
      );
}

export default App;
