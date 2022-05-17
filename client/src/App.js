import React from 'react'
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Item from './components/Item/Item';
// import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ShareMovie from './components/ShareMovie/ShareMovie';
import PostDetails from './components/PostDetails/PostDetails';


const App = () => {
  return (
    <BrowserRouter>
      <Container maxidth="lg">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/item' exact component={Item}/>
          <Route path="/auth" excat component={Auth}/>
          {/* <Route path="/cart" excat component={ShoppingCart}/> */}
          <Route path ="/posts/:id" excat component={PostDetails}/>
          <Route path="/posts" excat component={ShareMovie}/>

        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App