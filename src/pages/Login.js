import React, {Component} from 'react';
import Pic1 from '../assets/img/3390.png';

class Login extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className=" login row">
                    <div className="col-md-7 px-0">
                        <img className="pic1" src={Pic1} alt="pic1"/>
                    </div>
                    <div className="col-md-5">
                        <div className="right-text-wrapper">
                            <div className="right-text">
                                <h1>Tizimga xush kelibsiz!</h1>
                                <p className="mt-3">Tizimga kirish uchun, login va parol orqali<br/>
                                    autentifikatsiya jarayonidan o’ting</p>
                                <div className="form-group mt-3">
                                    <div className="input1a">
                                        <input type="text" className="login-input input1" placeholder="Login" id="usr"/>
                                    </div>
                                    <input type="password" className="login-input input2" placeholder="Parol" id="pwd"/>
                                    <button type="button" className="btn btn-secondary d-block mt-4 p-3">Tizimga kirish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;