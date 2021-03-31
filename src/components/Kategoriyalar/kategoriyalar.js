import React, {Component} from 'react';


class Kategoriyalar extends Component {
    state = {
        kategoriyaItem: [
            {
                kategoriyaUZ: 'Burger Uz',
                kategoriyaRU: 'Burger Ru',
                boshKategoriya: '-',
                id: '1'
            },
            {
                kategoriyaUZ: 'Burger Uz',
                kategoriyaRU: 'Burger Ru',
                boshKategoriya: '-',
                id: '2'
            }
        ],
        activeId: '1'
    }
    kategoriyaniActiveQilish = (id) => {
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
                                <p className="pt-1">Kategoriya(UZ)</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 px-0">
                            <div className="bg-white border-left text-center w-100 h-75">
                                <p className="pt-1">Kategoriya(RU)</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 px-0">
                            <div className="bg-white border-left text-center w-100 h-75">
                                <p className="pt-1">Bosh Kategoriya</p>
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
                        this.state.kategoriyaItem.map((bittaelement, nomer) =>
                            <div className="row mt-2 maxsulot-contener">


                                <div className="col-md-3 ">
                                    <div className="row ">
                                        <div className="bg-white w-100 max-content bord">
                                            <p className="pt-2 mt-2 ml-4">{bittaelement.kategoriyaUZ}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="bg-white w-100 max-content">
                                            <p className="pt-2 mt-2 ml-1">{bittaelement.kategoriyaRU}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="bg-white w-100 max-content">
                                            <p className="pt-2 mt-2 ml-5">{bittaelement.boshKategoriya}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="bg-white w-100 max-content pl-4 bord2">
                                            <div className="edit mt-2 ml-4"></div>
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

Kategoriyalar.propTypes = {};

export default Kategoriyalar;