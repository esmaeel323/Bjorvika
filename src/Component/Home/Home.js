import React, { Component } from 'react';
import {
    Card, CardImg, CardTitle, CardText, CardDeck, CardBody, Button} from 'reactstrap';
import Bjorvika2 from '../assets/1.jpg';
import Allemn from '../assets/allmen.png'
import Oversikt from '../assets/3Doversiktsbilde.jpg'
import Fade from 'react-reveal/Slide';
import Logo from '../assets/logo.png'
import opera from '../assets/opera.PNG'
import tt from '../assets/6.png'
import tttt from '../assets/3.jpg'
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;
  render () {
    window.scrollTo(0, 0)

    return (
        <div>
            <div className='header'>
        <Fade left>
      <div className="bjorvika">
          <img className="image" src={Logo} alt="Logo" />
      
      </div></Fade>
      
        </div>

        
        <div className="container">
        <Fade top>
                        <p className="tittel">WELCOME TO BJØRVIKA</p>
                        </Fade>
                        <Fade left>
             <div className="row">
                    <div className="column">
                        
                        <img className="image" src={Bjorvika2} alt="Logo" />
                       
                        
                    </div>
                    <div className="column">
                        
                            <div className="text">
                            <h3>About Bjørvika</h3>
                                <p>The vision that Bjørvika as the gateway to Norway's capital will appear as an expression of modern Norwegian urban culture and identity in architecture, technology and sustainable urban development.
                                <br/>The new district will be a source of joy and pride for the entire population of Oslo, and will deliberately help to describe the city's historical development from its origins to the 21st century.
                                </p>
                            </div>
                    
                    </div>
                </div>
                </Fade>


                <Fade right>
                <div className="row">
                    <div className="column">
                        
                        <img className="image" src={Oversikt} alt="3D Oversikt" />
                       
                        
                    </div>
                    <div className="column">
                            <div className="text">
                                <h3>The harbor promenade</h3>
                                <p>Oslo's Harbor Promenade will be 9 kilometers long from Frognerkilen in the west to Alna's outlet in the east when it is completed. The continuous promenade will run along the entire seafront in Oslo, and will receive varied offers throughout the year. It is designed so that it is widely available around the clock and adapted to all user groups.
                                </p>
                            </div>
                    </div>
                  </div>
                  </Fade>
                  <Fade left>
                  <div className="row">
                    <div className="column">
                        <img className="image" src={opera} alt="Opera" />
                        
                        
                    </div>
                    <div className="column">
                            <div className="text">
                                <h3>The Norwegian Opera </h3>
                                <p>The iconic Opera House designed by Snøhetta architects is already well established in Bjørvika, and celebrated its 10th anniversary in 2018. The various ballet and opera performances are very popular and often sold out long in advance. The roof is also a favorite place to enjoy the sun and the view. Here you can also experience outdoor concerts once in a while. The building has two restaurants and a sunny outdoor terrace.
                                </p>
                            </div>
                    </div>
                  </div>
                  </Fade>


                    <Fade right>
                    <CardDeck>
                    <Card>
                        <CardImg className="imgcard" top width="100%" src={Allemn} alt="Card image cap" />
                        <CardBody>
                        <CardTitle><h3>The Public Spaces</h3></CardTitle>
                        <CardText>One of the most central urban planning measures for Bjørvika is the seven commons that extend as open connections...</CardText>
                        <Button href="/commons" className="btn-red">Find out more</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg className="imgcard" top width="100%" src={tt} alt="Card image cap" />
                        <CardBody>
                        <CardTitle><h3>The Districts</h3></CardTitle>
                        <CardText>Get to know Bjørvika's hotels, restaurants, collectives, opera and the library. Bjørvika is characterized by bustling bathing life, low traffic load...</CardText>
                        <Button href="/district" className="btn-red">Find out more</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg className="imgcard" top width="100%" src={tttt} alt="Card image cap" />
                        <CardBody>
                        <CardTitle><h3> The Arts</h3></CardTitle>
                        <CardText>Most are permanent works, but at Kunsthall Oslo, Shoot Gallery and the Munch Museum in Motion, changing exhibitions are shown...</CardText>
                        <Button href="/art" className="btn-red">Find out more</Button>
                        </CardBody>
                    </Card>
                    </CardDeck>
                    </Fade>

            </div>
      </div>
     
    
);
}
}