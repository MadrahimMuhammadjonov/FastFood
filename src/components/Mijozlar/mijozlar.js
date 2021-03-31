import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Mijozlar extends Component {
    state = {
        MijozlarItem: [
            {
                MijozIsmi:'Qobil Yunusov',
                Telefon: '+998995623589',
                Buyurtma: 3,
                status: 'Active',
                id: '1'
            },
        ],
        activeId: '1'
    }
    mijozlarniActiveQilish = (id) => {
        alert(id)
        this.setState({
            activeId: id
        })
    }
    render() {
        return (
            <div>
                <div className="container-fluid">

                    <div className="row ">
                        <div className="col-md-3 mt-4 px-0">
                            <div className="bg-white text-center w-100 h-75">
                                <p className="pt-1">Mijoz ismi</p>
                            </div>
                        </div>
                        <div className="col-md-2 mt-4 px-0">
                            <div className="bg-white border-left text-center w-100 h-75">
                                <p className="pt-1">Telefon raqami</p>
                            </div>
                        </div>
                        <div className="col-md-2 mt-4 px-0">
                            <div className="bg-white border-left text-center w-100 h-75">
                                <p className="pt-1">Buyurtmalar Soni</p>
                            </div>
                        </div>
                        <div className="col-md-2 mt-4 px-0">
                            <div className="bg-white border-left text-center w-100 h-75">
                                <p className="pt-1">Status</p>
                            </div>
                        </div>

                        <div className="col-md-3 mt-4 px-0">
                            <div className="bg-white border-left text-center w-100 h-75">
                                <p className="pt-1">Action</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {
                        this.state.MijozlarItem.map((bittaelement, nomer) =>
                            <div className="row mt-2 maxsulot-contener">


                                <div className="col-md-3 ">
                                    <div className="row ">
                                        <div className="bg-white w-100 max-content bord">
                                            <p className="pt-2 mt-2 ml-4">{bittaelement.MijozIsmi}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="row">
                                        <div className="bg-white w-100 max-content">
                                            <p className="pt-2 mt-2 ml-1">{bittaelement.Telefon}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="row">
                                        <div className="bg-white w-100 max-content">
                                            <p className="pt-2 mt-2 ml-5">{bittaelement.Buyurtma}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="row">
                                        <div className="bg-white w-100 max-content">
                                            <p className="pt-2 mt-2 ml-5 text-success">{bittaelement.status}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="bg-white w-100 max-content pl-4 bord2">
                                            <div className="slash mt-2"></div>
                                            <div className="edit mt-2 ml-5"></div>
                                            <div className="trash  mt-2 "></div>
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

Mijozlar.propTypes = {};

export default Mijozlar;