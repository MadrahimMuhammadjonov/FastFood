import React, {Component} from 'react';


class Filiallar extends Component {
    state = {
        filiallarItem: [
            {
                FilialNomiUz:'Shaxriston',
                FilialNomiRu:'Shaxriston',
                Moljal: 'Metro ro`parasida',
                IshVaqti: '8:00 13:00',
                id: '1'
            },
            {
                FilialNomiUz:'Shaxriston',
                FilialNomiRu:'Shaxriston',
                Moljal: 'Metro ro`parasida',
                IshVaqti: '8:00 13:00',
                id: '2'
            }
        ],
        activeId: '1'
    }
    filiallarniActiveQilish = (id) => {
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
                                <p className="pt-1">Filial Nomi(UZ)</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 px-0">
                            <div className="bg-white border-left text-center w-100 h-75">
                                <p className="pt-1">Filial Nomi(RU)</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 px-0">
                            <div className="bg-white border-left text-center w-100 h-75">
                                <p className="pt-1">Mo`ljal</p>
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
                        this.state.filiallarItem.map((bittaelement, nomer) =>
                            <div className="row mt-2 maxsulot-contener">


                                <div className="col-md-3 ">
                                    <div className="row ">
                                        <div className="bg-white w-100 max-content bord">
                                            <p className="pt-2 mt-2 ml-4">{bittaelement.FilialNomiUz}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="bg-white w-100 max-content">
                                            <p className="pt-2 mt-2 ml-1">{bittaelement.FilialNomiRu}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="bg-white w-100 max-content">
                                            <p className="pt-2 mt-2 ml-5">{bittaelement.Moljal}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="row">
                                        <div className="bg-white w-100 max-content pl-4 bord2">
                                            <div className="map mt-2"></div>
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

Filiallar.propTypes = {};

export default Filiallar;