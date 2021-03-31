import React, {Component} from 'react';
import Booknark from '../../assets/img/icons/bookmark.svg'
import clock from '../../assets/img/icons/clock.svg'
import {getFirstHidden} from "web-vitals/dist/modules/lib/getFirstHidden";

class Card extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 px-0 card-style">
                            <div className="bg-white ">
                                <div className="col-md-10">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="buyurtmachi-raqami">
                                                <h4>80:00</h4>
                                            </div>
                                            <div className="chiziq"></div>
                                            <div className="clock"><h5>00:30</h5></div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="bookmark"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 px-0 card-style">
                            <div className="bg-white ">
                                <div className="col-md-10">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="user"></div>
                                            <div className="phone "></div>
                                        </div>
                                        <div className="col-md-9">
                                            <h4 className="username">Madrahim Muhammadjonov</h4>
                                            <p className="phone-number ">(+99899) 899 36 00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 px-0 card-style">
                            <div className="bg-white ">
                                <div className="col-md-10">
                                    <div className="row mt-3">
                                        <div className="col-md-2">
                                            <div className="clipboard"></div>
                                            <div className="truck"></div>
                                        </div>
                                        <div className="col-md-6">
                                            <h6 className="sum">35.500 UZS</h6>
                                            <h6 className="sum">35.500 UZS</h6>
                                        </div>
                                        <div className="col-md-4 d-flex mt-3">
                                            <div className="yashil m-1 p-2"></div>
                                            <div className="mt-1"><h6>Paymi</h6></div>
                                        </div>
                                    </div>
                                    <div className=""><p className="summa">Umumiy summa</p></div>
                                    <div className="ml-3"><h6>44.500 UZS</h6></div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 px-0 card-style right-card-position-a">
                            <div className="bg-white ">
                                <div className="col-md-10">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="user"></div>
                                            <div className="phone "></div>
                                        </div>
                                        <div className="col-md-9">
                                            <h4 className="username">Madrahim Muhammadjonov</h4>
                                            <p className="phone-number ">(+99899) 899 36 00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="toggleX right-card-position-r1"></div>
                            <div className="togglepach right-card-position-r2"></div>
                        </div>
                    </div>
                </div>
                {/*<div className="toggleX"></div>*/}
                {/*<div className="togglepach"></div>*/}
            </div>

        );
    }
}

Card.propTypes = {};

export default Card;