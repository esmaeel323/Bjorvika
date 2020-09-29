import React, { Component } from 'react';
import {NavBar} from './Component/Navbar/Navbar.js'
import {Main} from './Main.js'
import {Footer} from './Component/footer/Footer.js'
import './App.css';

export class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div>
        <NavBar></NavBar>
        <Main></Main>
        <Footer></Footer>
        
      </div>
    );
  }
}


export default App;
