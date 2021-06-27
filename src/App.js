import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Header from '../src/components/Header/Header'
import ProductScreen from '../src/components/Product/ProductScreen'
import Login from './pages/Login/login';
import Cart from './pages/Cart';
import ContextProvider from './ContextProvider'
import Contact from './pages/contact';
import Signup from './pages/Login/registerpage'
import PaymentPage from './pages/PaymentPage';


const initialState = {user: {}};

function reducer(state, action) {
  switch (action.type) {
    case 'setData':
      return {};
    default:
      throw new Error();
  }
}

function App() {
  return (
    
    
      <Router>
        <ContextProvider>
          <Header/>
        
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/reports' component={Reports} />
            <Route path='/product' component={Products} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Signup} />
            <Route path="/products/:id" component ={ProductScreen}/>
            <Route path="/cart"component ={Cart}/>
            <Route path="/payment" component ={PaymentPage}/>
 


          </Switch>
        </ContextProvider>
      </Router>
    
  );
}

export default App;
