import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import {Home} from './Component/Home/Home.js'
import {Allmen} from './Component/Allmen/Allmen.js'
import {Kunst} from './Component/kunst/Kunst.js'
import {Bydel} from './Component/Bydel/Bydel.js'


export class Main extends Component {
  static displayName = Main.name;
  render () {
    return (
    
        <main>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/district" exact component={Bydel} />
          <Route path="/commons" exact component={Allmen} />
          <Route path="/art" exact component={Kunst} />

        </Switch>
      </main>
);
}
}