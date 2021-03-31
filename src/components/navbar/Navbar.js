import React, {Component} from 'react';
import IconFast from '../../assets/img/icons/Group 2.svg'
import IconRectangle1 from '../../assets/img/icons/Rectangle Copy.svg'
import IconRectangle2 from '../../assets/img/icons/Rectangle.svg'



class Navbar extends Component {




    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 px-0">
                        <div className="bg-white ml-2 navbar-item">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="SuccessButton SuccessButton0 "></div>
                                </div>
                                <div className="col-md-8">
                                    <h6 className="mt-4 font-weight-bold">Yangi buyurtma <br/> qo'shish</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7 px-0">
                        <div className="bg-white ml-2 navbar-item">
                            <div className="pt-3">
                                <div className="col-md-10 offset-1  ">
                                    <div className="row p-1 bottom-item">
                                        <div className="col-md-3  blog-button active">
                                            <h6 className="text-center p-1 mt-2 " >Blog</h6>
                                        </div>
                                        <div className="col-md-3 blog-button">
                                            <h6 className="text-center p-1 mt-2" >Blog</h6>
                                        </div>
                                        <div className="col-md-3 blog-button">
                                            <h6 className="text-center p-1 mt-2" >Blog</h6>
                                        </div>
                                        <div className="col-md-3 blog-button">
                                            <h6 className="text-center p-1 mt-2" >Blog</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 px-0">
                        <div className="bg-white ml-2 navbar-item">
                            <div className="pt-3">
                                <div className="col-md-6 offset-3  ">
                                    <div className="row p-1 bottom-item">
                                        <div className="col-md-6 blog-button-group p-2">
                                           <div className=" ml-2">
                                               <img src={IconFast} alt=""/>
                                           </div>
                                        </div>
                                        <div className="col-md-6 blog-button-group ">
                                            <div className="mt-2">
                                                <img src={IconRectangle1} alt=""/>
                                                <img src={IconRectangle2} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Navbar.propTypes = {};

export default Navbar;