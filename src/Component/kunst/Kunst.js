import React, { Component } from 'react';
import Museum from '../assets/Museum.jpg'
import Futurefarmers from '../assets/Futurefarmers.jpg'
import Futurefarme from '../assets/Futurefarme.jpg'
import Loster from '../assets/Loster.jpg'
import Loster2 from '../assets/Loster2.jpg'
import Kunsthall from '../assets/kusnthall.jpg'
import Thheisle from '../assets/TheIsle.jpg'
import Slat from '../assets/salt.jpg'
import Fade from 'react-reveal/Slide';
import '../kunst/Kunst.css';

export class Kunst extends Component {
  static displayName = Kunst.name;

  render () {
    return (

        <div>
        <div className="container">
        <Fade top>
            <div className="overskrift"><h2>Art in Bjørvika</h2></div>
            </Fade>
            <Fade left>
             <div className="row">
                    <div className="column">
                        <img className="image" src={Museum} alt="OperaAllmen" />
                    </div>
                    <div className="column">
                            <div className="text">
                                <h3>Munch Museum</h3>
                                <p>The new Munch Museum will show well-known, permanent exhibitions that represent Munch's life, but also various exhibitions that show new aspects of Munch. The museum will also borrow exciting exhibitions from abroad, so there will often be several parallel exhibitions. With 13 floors, seven of which are dedicated to exhibitions, the museum offers a rich selection of art at. 10-22 every day. The museum will open in 2020.
                                </p>
                            </div>
                    </div>
                    </div>
                    </Fade>

                    <Fade right>
                    <div className="row">
                    <div className="column">
                        <img className="image" src={Futurefarmers} alt="futurefarmers-flatbread-society" />
                        <img className="image" src={Futurefarme} alt="futurefarmers-flatbread-society" />   
                    </div>
                    <div className="column">
                            <div className="text">
                                <h3>Futurefarmers flatbread society</h3>
                                <p>The baking house and fields with primrose grains are two main elements in Futurefarmer's art project at Losæter.<br/>
                                The Bakehouse emerges as an image of a vessel being built or repaired: scaffolding, clamps and the precarious angles of support beams evoke images of the past when this area was a living port. Sitting inside this wooden scaffolding is the skeleton of a boat. Built with local boat builders, the hull of this "ship" hosts three bread ovens for making a variety of bread types and the main form is insulated with locally-sourced rammed earth.
                                </p>
                            </div>
                            </div>
                     </div>
                     </Fade>


                     <Fade left>
                  <div className="row">
                    <div className="column">
                      
                        <img className="image" src={Loster2} alt="Loster" />
                        <img className="image" src={Loster} alt="Loster" /> 
                    </div>
                    <div className="column">
                            <div className="text">
                                <h3>Losæter</h3>
                                <p>Losæter is a cultural institution without walls in one of Bjørvika's seven commons. Losæter is a modern park with edible plants and vibrant life.

                                Losæter was established already in 2011 as an art project. Sætra has grown bigger and bigger and today consists of fields with primroses, living topsoil, pallet frames, vegetable beds, composting, a public bakery and a number of activities under the auspices of Bybonden, Bakelauget, Sansehagen, Herligheten Parsellkollektiv and many more.
                                </p>
                            </div>
                    </div>
                  </div>
                  </Fade>

              
                            <div className="kunst">
                                <h3>More art</h3>
                                <p> Here are some of the existing, past and future art investments <br/> in the new district that is emerging in Bjørvika.<br/> There is a wide range in both artists, art forms and eras.
                                </p>
                            </div>

                    <Fade right>
                            <div className="kunst">
                                <h3>Kunsthall</h3>
                                <img className="bilde" src={Kunsthall} alt="Kunsthall" />
                                <p>Kunsthall Oslo shows international contemporary art with an emphasis on <br/>
                                 new productions and is at the same time interested in exploring the social and <br/>
                                  historical context of art production.
                                </p>
                            </div>
                    </Fade>

                    <Fade left>
                            <div className="kunst">
                                <h3>The Isle</h3>
                                <img className="bilde" src={Thheisle} alt="Kunsthall" />
                                <p>The Isle is an art project that consists of a floating cabin in <br/>the harbor between 
                                 Paulsenkaia and Bispekaia in Bjørvika.
                                </p>
                            </div>
                    </Fade>
                    <Fade right>
                            <div className="kunst">
                                <h3>SALT</h3>
                                <img className="bilde" src={Slat} alt="SALT" />
                                <p>In collaboration between Aaland and SALT, we have hung up more <br/>than a hundred different towels in the Arctic Pyramid.
                                </p>
                            </div>
                    </Fade>

                    <h4> And there are more to discover</h4>
            </div>
      </div>

);
}
}