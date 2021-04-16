import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/pages/home/Home';
import Clubs from '../components/pages/clubs/Clubs';
import NFTDisplay from '../components/pages/NFT/NFTDisplay';

const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/clubs' component={Clubs}></Route>
      <Route exact path='/nfttest' component={NFTDisplay}></Route>
    </Switch>
  );
};

export default Main;
