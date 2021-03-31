import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar1 from '../../assets/img/3390.png'

class Maxsulotlar extends Component {

    state = {
        maxsulotlarItem: [
            {
                img: Avatar1,
                name: 'Lavash mini',
                kategoriya: 'Lavash',
                price: 35.00,
                qoshimcha: 'Kichkina Lavash, Bla Bla',
                id: '1'
            },
            {
                img: Avatar1,
                name: 'Lavash mini',
                kategoriya: 'Lavash',
                price: 35.00,
                qoshimcha: 'Kichkina Lavash, Bla Bla',
                id: '1'
            }
        ],
        activeId: '1'
    }
    maxsulotlarniActiveQilish = (id) => {
        alert(id)
        this.setState({
            activeId: id
        })
    }

    render() {
        return (
            <div>
                <div className="container-fluid">

                    <div className="row">
                        <div className="col md-3 mt-4 px-0">
                            <div className="bg-white  text-center w-100 h-75">
                                <p className="pt-1">Maxsulotlar</p>
                            </div>
                        </div>
                        <div className="col-md-2 mt-4 px-0">
                            <div className="bg-white border-left text-center w-100 h-75">
                                <p className="pt-1">Kategoriya</p>
                            </div>
                        </div>
                        <div className="col md-2 mt-4 px-0">
                            <div className="bg-white border-left text-center w-100 h-75">
                                <p className="pt-1">Narxi</p>
                            </div>
                        </div>
                        <div className="col md-3 mt-4 px-0">
                            <div className="bg-white border-left text-center w-100 h-75">
                                <p className="pt-1">Qo'shimcha</p>
                            </div>
                        </div>
                        <div className="col md-2 mt-4 px-0">
                            <div className="bg-white border-left text-center w-100 h-75">
                                <p className="pt-1">Action</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {
                         this.state.maxsulotlarItem.map((bittaelement , nomer)=>
                        <div className="row mt-2 maxsulot-contener">
                            <div className="col-md-1 ">
                                  {/*// onClick={() => this.maxsulotlarItem(bittaelement.id)}>*/}
                                <div className="row ">
                                    <div className="bg-white w-100 max-content bord">
                                        <img className="avatar-food" src={bittaelement.img} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="row">
                                    <div className="bg-white w-100 max-content">
                                        <p className="pt-2 mt-2">{bittaelement.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="row">
                                    <div className="bg-white w-100 max-content">
                                        <p className="pt-2 mt-2 ml-1">{bittaelement.kategoriya}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="row">
                                    <div className="bg-white w-100 max-content">
                                        <p className="pt-2 mt-2 ml-4">{bittaelement.price}<span>UZS</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="bg-white w-100 max-content">
                                        <p className="pt-2 mt-2 ml-5">{bittaelement.qoshimcha}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="row">
                                    <div className="bg-white w-100 max-content pl-4 bord2">
                                        <div className="edit mt-2"></div>
                                        <div className="trash  mt-2"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                         )}
                </div>
            </div>
        );
    }
}

Maxsulotlar.propTypes = {};

export default Maxsulotlar;