import React from 'react'
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Item from './components/Item/Item';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
    <BrowserRouter>
      <Container maxidth="lg">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/item' exact component={Item}/>
          <Route path='/profile' exact component={Profile}/>
          <Route path="/auth" excat component={Auth}/>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App