import React, { Component } from 'react';
import './Footer.css'

export class Footer extends Component {
  static displayName = Footer.name;

  render () {
    return (
   
        <div className="footer">
          <div className="txt"> FOLLOW US ON</div>
          
                      <div>
                                <a href="https://www.facebook.com/">Facebook</a>
                                <a href="https://www.instagram.com/">Instagram</a>
                                <a href="https://twitter.com/">Twitter</a>
                        </div> 
                        <p>A test prosjekt by Esmaeel © 2020</p>
        </div>
);
}
}
