import React, {Component} from 'react';
import Navbar from "../navbar/Navbar";
import Pic2 from '../../assets/img/Bitmap.png';
import Iconcircle from '../../assets/img/icons/check-circle.svg';
import Iconarcive from '../../assets/img/icons/archive.svg';
import Iconalayers from '../../assets/img/icons/layers.svg';
import Iconamap from '../../assets/img/icons/map-pin.svg';
import Iconauser from '../../assets/img/icons/users.svg';
import Iconachart from '../../assets/img/icons/bar-chart-2.svg';
import Iconasetting from '../../assets/img/icons/settings copy 2.svg';
import Card from "../Card/Card";
import Maxsulotlar from "../Maxsulotlar/maxsulotlar";
import Kategoriyalar from "../Kategoriyalar/kategoriyalar";
import Filiallar from "../Filiallar/Filiallar";
import Mijozlar from "../Mijozlar/mijozlar";

class Sidebar extends Component {

    state = {
        sidebarItems: [
            {
                img: Iconcircle,
                text: 'Buyurtmalar',
                id: '1'
            },
            {
                img: Iconarcive,
                text: 'Maxsulotlar',
                id: '2'
            },
            {
                img: Iconalayers,
                text: 'Kategoriyalar',
                id: '3'
            },
            {
                img: Iconamap,
                text: 'Filiallar',
                id: '4'
            },
            {
                img: Iconauser,
                text: 'Mijozlar',
                id: '5'
            },
            {
                img: Iconachart,
                text: 'Xisobotlar',
                id: '6'
            },
            {
                img: Iconasetting,
                text: 'Katalog',
                id: '7'
            },
        ],
        activeId: '1'
    }

    sidebarniActivQilish = (id) => {
        // alert(id)
        this.setState({
            activeId: id
        })
    }

    render() {
        return (
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col-md-3 bg-white pt-5 vh-100 ">
                        <div className="row pt-0 ">
                            <div className="col-md-3 ">
                                <img className="Pic2" src={Pic2} alt="pic2"/>
                            </div>
                            <div className="col-md-9">
                                <h2 className=" font-weight-bold">Fast Food</h2>
                                <p className=" ">Online maxsulotlar sotuvi</p>
                            </div>
                        </div>
                        <div className="row pt-5 ">

                            {
                                this.state.sidebarItems.map((bittaElement, nomer) =>
                                    <div key={nomer} className="col-12 pl-0"
                                         onClick={() => this.sidebarniActivQilish(bittaElement.id)}>
                                        <div className="pr-4">
                                            <div
                                                className={this.state.activeId === bittaElement.id ? "active-sidebar-item" : "side-item"}>
                                                <div className="ml-5 d-flex">
                                                    <div className="icons pt-2 mt-1">
                                                        <img src={bittaElement.img} className="" alt=""/>
                                                    </div>
                                                    <h5 className="py-2 ml-4">{bittaElement.text}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }


                        </div>
                    </div>
                    <div className="col-md-9 px-0 ">
                        <Navbar/>
                        {/*<Card/>*/}
                        {/*<Maxsulotlar/>*/}
                        {/*<Kategoriyalar/>*/}
                        {/*<Filiallar/>*/}
                        {/*<Mijozlar/>*/}
                    </div>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {};

export default Sidebar;