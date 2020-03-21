import React, { Component } from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import Home from './containers/Home';
import  CartDetails  from './components/Cart/CartDetails/CartDetails';
import CartSummary from './components/Cart/CartSummary/CartSummary';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <CartSummary/>
                <Switch>
                    <Route  path="/shop" component={Home}/>
                     <Route path="/cart" component={CartDetails}/>
                     <Redirect to="/shop" />
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;