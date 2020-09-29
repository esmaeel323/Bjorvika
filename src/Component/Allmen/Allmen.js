import React, { Component } from 'react';
import OperaAll from '../assets/operaallmenningen.jpg'
import Akerseallmen from '../assets/akerselallm.jpg'
import Bispevika from '../assets/Bispevika.jpg'
import Fade from 'react-reveal/Slide';
import '../Allmen/Allmen.css';

export class Allmen extends Component {
  static displayName = Allmen.name;

  render () {
    return (

        <div>
        <div className="container">
        <Fade top>
            <div className="overskrift"><h2>Commons in Bjørvika</h2></div>
            </Fade>
            <Fade left>
             <div className="row">
                    <div className="column">
                        
                        <img className="image" src={OperaAll} alt="OperaAllmen" />
                        
                        
                    </div>
                    <div className="column">
                     
                            <div className="text">
                                <h3>The Opera  common</h3>
                                <p>The Opera common is centrally located in front of Oslo's new main library Deichman Bjørvika and between Jernbanetorget and Opera and the fjord. The large urban space that the common is is opens up towards the fjord at the same time as the water enters all the way towards the city center. Outside the library is a water mirror that can be emptied and make the space usable for a variety of events, also under the auspices of the library.
                                </p>
                            </div>
                  
                    </div>
                    </div>
                    </Fade>

                    <Fade right>
                    <div className="row">
                    <div className="column">
                        
                        <img className="image" src={Bispevika} alt="Bispevika" />
                        
                    </div>
                    <div className="column">
                            <div className="text">
                                <h3>Bispevika</h3>
                                <p>Bispekilen is a visual and functional connection between the Medieval Park and the fjord.
                                The direction of the urban space is determined by the line of sight between Ladegården and Akershus Fortress. As a living space, Bispekilen is first and foremost of importance to the local environment, and will be an offer to both those who work and those who live in the immediate area.
                                </p>
                            </div>
                    </div>
                  </div>
                  </Fade>


                  <Fade left>
                    <div className="row">
                    <div className="column">
                        
                            <div>
                        <img className="image" src={Akerseallmen} alt="Akerseallmen" />
                        </div>
                        
                        
                    </div>
                    <div className="column">
                            <div className="text">
                                <h3>Akerseallmen</h3>
                                <p>The Opera common is centrally located in front of Oslo's new main library Deichman Bjørvika and between Jernbanetorget and Opera and the fjord. The large urban space that the common is is opens up towards the fjord at the same time as the water enters all the way towards the city center. Outside the library is a water mirror that can be emptied and make the space usable for a variety of events, also under the auspices of the library.
                                </p>
                            </div>
                        
                    </div>
                  </div>
                  </Fade>
            </div>
      </div>

);
}
}