import React, { Component } from 'react';
import opera from '../assets/bydel.PNG'
import Operahuse from '../assets/opera.PNG'
import Hotel from '../assets/hotel.JPG'
import Station from '../assets/Station.jpg'
import Barcode from '../assets/barcode.jpg'
import Library from '../assets/library.jpg'
import Fade from 'react-reveal/Slide';
import '../Bydel/Bydel.css';

export class Bydel extends Component {
  static displayName = Bydel.name;

  render () {
    window.scrollTo(0, 0)

    return (

        <div>
        <div className="container">
        <Fade top>
            <div className="overskrift"><h2>The District</h2></div>
        </Fade>
        <Fade right>
            <img className="bydel" src={opera} alt="Bydel" />
            </Fade>
            <Fade left>
            <div className="row">
             <div className="column">
                        
                        <img className="image" src={Hotel} alt="Hotel" />
                    </div>
                    <div className="column">
                        
                            <div className="text">
                                <h3>Clarion Hotel Oslo </h3>
                                <p>The new hotel will open in July 2019, and will focus on art, food and experiences. The hotel has 255 rooms, suites, conference facilities and a fitness room. At street level, you will be able to enjoy the restaurant and bar concept Kitchen & Table, where star chef Marcus Samuelsson has made the dishes, as well as two other restaurants that get nice outdoor seating. A permanent art collection will be complemented by exhibitions and events. Art must also take place in the decor.
                                </p>
                            </div>
                    </div>
                    </div>
                    </Fade>

                    <Fade right>
            <div className="row">
             <div className="column">
                        
                        <img className="image" src={Barcode} alt="Bar code" />
                    </div>
                    <div className="column">
                        
                            <div className="text">
                                <h3>Bar code </h3>
                                <p>The 12 high-rise buildings that together form Barcode, have become an iconic skyline motif for new, modern Oslo. The buildings offer more than spectacular architecture; at street level you will find over 30 restaurants, shops, galleries and services. Several of the buildings are pure office buildings for some of the country's leading companies, but you will also find 397 homes in Barcode. The buildings have individual shape, height and character to create an exciting variation in the architecture.
                                </p>
                            </div>
                    </div>
                    </div>
                    </Fade>

                    <Fade left>
                    <div className="row">
             <div className="column">
                        
                        <img className="image" src={Station} alt="Station" />
                    </div>
                    <div className="column">
                        
                            <div className="text">
                                <h3>Oslo Central Station </h3>
                                <p>Norway's largest public transport hub is within walking distance of Bjørvika. Here you will find all forms of public transport such as trams, buses, subways and trains. Over the next few years, the central station will be upgraded on a large scale, which will increase the efficiency and attractiveness of the entire area.
                                </p>
                            </div>
                    </div>
                    </div>
                    </Fade>

                    <Fade right>
             <div className="row">
             <div className="column">
                        
                        <img className="image" src={Operahuse} alt="Operahuse" />
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


                    <Fade left>
             <div className="row">
             <div className="column">
                        
                        <img className="image" src={Library} alt="library" />
                    </div>
                    <div className="column">
                        
                            <div className="text">
                                <h3>Deichman Library </h3>
                                <p>The country's new main library will house more than a traditional library, and will include exhibitions and cultural activities. The house will have over 1000 seats in large open areas spread over 5 floors, classrooms, digital tools, a cinema and over half a million books. Deichman opens in 2020, and will be open every day at 09-23.
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