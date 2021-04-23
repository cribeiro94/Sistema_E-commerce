import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
         <header className="row">
             <div>
                 <Link className="brand" to="/">MarketPlay</Link>
             </div>
             <div>
                 <Link to="/cart">Carrinho</Link>
                 <Link to="/signin">Faça seu login</Link>
             </div>
         </header>
         <main>
           <Route path="/cart/:id?" component={CartScreen}></Route>
           <Route path="/product/:id" component={ProductScreen}></Route>
           <Route path="/" component={HomeScreen} exact></Route>
            </main>
         <footer className="row center">Todos os direitos reservados.</footer>
         </div>
         </BrowserRouter>
  );
}

export default App;
